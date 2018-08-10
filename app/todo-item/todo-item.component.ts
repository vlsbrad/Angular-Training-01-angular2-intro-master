import { todos } from './../shared/data';
import { Todo, ITodo } from './../shared/todo';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls:['todo-item.component.css']
})
export class TodoItemComponent{

  todo: Todo =new Todo('dsdsdsdsds');
}