export interface Task {
  id: string;
  title: string;
  tag: string;
}

export type ColumnTask = {
  status: Status;
  icon: string;
  color: string;
  items: Task[];
};

export type Status = "To Do" | "In Progress" | "Review" | "Done";
