import {Component } from '@angular/core';

// sample from here: https://www.youtube.com/watch?v=gtCR3FdTIck&index=4&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styles:[`
    header{
      background-color: forestgreen
    }
  `]

})

export class AppComponent{
  title = 'Angular 2Do (hello world !!!)';
}