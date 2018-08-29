
import { Todo, ITodo } from './../shared/todo';
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls:['todo-list.component.css']
})
export class TodoListComponent{

  @Input() todos: Todo[];

  toggle(todo: ITodo){
    todo.completed = !todo.completed;
  }


  delete(todo: ITodo){
    let index = this.todos.indexOf(todo);
    if  (index>-1){
      this.todos.splice(index, 1);
    }
  }

}