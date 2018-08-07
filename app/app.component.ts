import {Component } from '@angular/core';

@Component({
  selector: 'app',
  template: "<header><img src='img/angular.svg' /> <h1>{{ title }}</h1></header>"
})

export class AppComponent{
  title = 'Angular 2Do (hello world !!!)';
}