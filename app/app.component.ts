import {Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <header>
    <img src='img/angular.svg' />
    <h1>{{ title }}</h1>
    </header>

    <main>
      <section class="todo-list">
        <div class="todo-item">Izuchit Angular 2</div>
      </section>
    </main>
  `
})

export class AppComponent{
  title = 'Angular 2Do (hello world !!!)';
}