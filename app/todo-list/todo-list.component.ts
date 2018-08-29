import { todos } from './../shared/data';
import { Todo, ITodo } from './../shared/todo';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls:['todo-list.component.css']
})
export class TodoListComponent{

  todos: Todo[] = todos;

  toggle(todo: ITodo){
    console.log('toggle', todo);
    todo.completed = !todo.completed;
  }


  delete(todo: ITodo){
    console.log('delete');
    let index = this.todos.indexOf(todo);
    if  (index>-1){
      this.todos.splice(index, 1);
    }
  }

}