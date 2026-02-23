import { useContext } from 'react';
import { TaskContext } from './TaskContex';

export function useTaskContext() {
  return useContext(TaskContext);
}
