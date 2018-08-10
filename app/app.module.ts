import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {


}
