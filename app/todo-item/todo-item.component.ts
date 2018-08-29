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
  @Output() toggle = new EventEmitter();
  @Output() delete = new EventEmitter();

  onToggle(){
    this.toggle.emit(this.todo);
  }

  onDelete(){
    this.delete.emit(this.todo);
  }

}