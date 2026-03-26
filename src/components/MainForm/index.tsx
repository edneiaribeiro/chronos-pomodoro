import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { toast } from 'react-toastify';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      // alert('Por favor, insira o nome da tarefa.');
      toast.warn('Por favor, insira o nome da tarefa.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      title: taskName,
      durationInMinutes: state.config[nextCycleType],
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText={'task'}
          placeholder='Digite sua tarefa'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <Tips nextCycleType={nextCycleType} />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            icon={<PlayCircleIcon />}
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            key='button-submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            icon={<StopCircleIcon />}
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            color='red'
            onClick={handleInterruptTask}
            type='button'
            key='button-button'
          />
        )}
      </div>
    </form>
  );
}
