import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';

type TipsProps = {
  nextCycleType: TaskModel['type'];
};

export function Tips({ nextCycleType }: TipsProps) {
  const { state } = useTaskContext();

  // tips
  const tipsForActiveTask = {
    workTime: (
      <span>
        Mantenha o foco por <b>{state.config.workTime}</b> minutos
      </span>
    ),
    shortBreakTime: (
      <span>
        Faça uma pausa rápida de <b>{state.config.shortBreakTime}</b> minutos
      </span>
    ),
    longBreakTime: (
      <span>
        Intervalo longo. Relaxe completamente por{' '}
        <b>{state.config.longBreakTime}</b> minutos
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Planeje sua próxima tarefa no ciclo de <b>{state.config.workTime}</b>{' '}
        minutos
      </span>
    ),
    shortBreakTime: (
      <span>
        Prepare-se! Intervalo curto de: <b>{state.config.shortBreakTime}</b>{' '}
        minutos
      </span>
    ),
    longBreakTime: (
      <span>
        Aproveite o intervalo longo de: <b>{state.config.longBreakTime}</b>{' '}
        minutos
      </span>
    ),
  };

  return (
    <>
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
    </>
  );
}
