import { SHOW_TASK } from 'src/common';
import { Task } from './task';

export interface GetTaskByDateType {
  show: SHOW_TASK;
  selectedDate: string;
  organizationId?: string;
}

export type GetTaskByDateResponse = Task[];
