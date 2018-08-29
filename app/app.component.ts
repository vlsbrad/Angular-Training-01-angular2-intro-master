import { ITodo } from './shared/todo';
// sample from here: https://www.youtube.com/watch?v=gtCR3FdTIck&index=4&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp

import {Component } from '@angular/core';

import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})

export class AppComponent{
  title: string = 'Angular 2Do (hello world !!!)';
  todos: Todo[] = todos;


  create(title:string){
    const todo = new Todo(title);
    this.todos.push(todo);
  }

}