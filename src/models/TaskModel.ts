import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  title: string;
  durationInMinutes: number;
  startDate: number;
  endDate?: number;
  completedDate?: number | null; // quando a task for completada
  interruptedDate?: number | null; // quando a task for interrompida
  // type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
  type: keyof TaskStateModel['config'];
};
