export interface Task {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  disabled: boolean;
  details: string | null;
  repeatWeekly: number[] | null;
  repeatMonthly: number[] | null;
  repeatBusinessDays: number[] | null;
  checkedDates: string[] | null;
  beginDate: string; // 'YYYY-MM-DD'
  endDate: string; // 'YYYY-MM-DD'
}
