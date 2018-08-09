import {Component } from '@angular/core';

// sample from here: https://www.youtube.com/watch?v=gtCR3FdTIck&index=4&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp


const todos = [
  'Izuchit Java Script',
  'Izuchit Angular 2',
  'Napisat prilozhenije'
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
}