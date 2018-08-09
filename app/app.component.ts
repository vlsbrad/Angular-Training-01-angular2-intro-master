import {Component } from '@angular/core';

// sample from here: https://www.youtube.com/watch?v=gtCR3FdTIck&index=4&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp


const todos = [
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
  title = 'Angular 2Do (hello world !!!)';
  todos = todos;

  toggle(todo: any){
    console.log('toggle', todo);
    todo.completed = !todo.completed;
  }


  delete(todo: any){
    let index = this.todos.indexOf(todo);
    if  (index>-1){
      this.todos.splice(index, 1);
    }
  }

}