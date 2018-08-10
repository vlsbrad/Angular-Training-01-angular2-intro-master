export interface ITodo{
  title: string;
  completed: boolean;
}

export class Todo implements ITodo {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean = false){
    this.title = title;
    this.completed = completed;
  }
} 