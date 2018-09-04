import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ITodo } from './todo';

export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    
    const todos: ITodo[] = [
      { title: 'Izuchit Java Script', completed: true },
      { title: 'Izuchit Angular 2', completed: false },
      { title: 'Napisat prilozhenije', completed: false },
    ];

    return {todos: todos};
  }

}

