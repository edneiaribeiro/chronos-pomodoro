import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

/**
 * useReducer <- hook do React que receb uma funcao reducer e um estado inicial, e retorna o estado atual e uma funcao dispatch para enviar acoes para o reducer
 * reducer <- funcao pura que recebe o estado atual e uma acao, e retorna um novo estado com base na acao recebida
 * dispatch <- funcao que recebe uma acao e a envia para o reducer para atualizar o estado
 * state <- estado atual do contexto, que pode ser atualizado pelo reducer
 * action <- objeto que representa uma acao a ser realizada/disparada, geralmente tem um tipo e um payload
 * payload <- dados adicionais que acompanham a acao, usados para atualizar o estado no reducer
 * type <- string (pode ser enum, constante, etc) que representa o tipo da acao, usado para identificar qual acao deve ser realizada no reducer
 */
export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  RESET_TASK = 'RESET_TASK',
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    };

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.RESET_TASK;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
