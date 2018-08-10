import {Component } from '@angular/core';

// sample from here: https://www.youtube.com/watch?v=gtCR3FdTIck&index=4&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp

interface ITodo{
  title: string;
  completed: boolean;
}

class Todo implements ITodo {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean = false){
    this.title = title;
    this.completed = completed;
  }
} 

const todos: ITodo[] = [
  { title: 'Izuchit Java Script', completed: true },
  { title: 'Izuchit Angular 2', completed: false },
  { title: 'Napisat prilozhenije', completed: false },
];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})

export class AppComponent{
  title: string = 'Angular 2Do (hello world !!!)';
  todos : ITodo[] = todos;


  create(event: Event, input: HTMLInputElement){
    event.preventDefault(); 
    let todo: Todo = new Todo(input.value);
    this.todos.push(todo);
  }

  toggle(todo: ITodo){
    console.log('toggle', todo);
    todo.completed = !todo.completed;
  }


  delete(todo: ITodo){
    let index = this.todos.indexOf(todo);
    if  (index>-1){
      this.todos.splice(index, 1);
    }
  }

}