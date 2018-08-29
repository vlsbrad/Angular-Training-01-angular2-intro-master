import { todos } from './../shared/data';
import { Todo, ITodo } from './../shared/todo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls:['todo-item.component.css']
})
export class TodoItemComponent{

  @Input() todo : Todo;

  @Output() delete = new EventEmitter();


  toggle(){
    //console.log('this.todo.completed', this.todo.completed);
    this.todo.completed = !this.todo.completed;
  }

  onDelete(){
    this.delete.emit()
  }
}