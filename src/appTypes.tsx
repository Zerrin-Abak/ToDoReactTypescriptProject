export type todoType = {
    task: string;
    day: number;
  }

export type itemType = {
    item : todoType;
    deleteTask(taskToDelete:string):void;
    
}