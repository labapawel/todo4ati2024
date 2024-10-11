import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  
  constructor (private serwis:TodoService) {
    serwis.subscribe().subscribe((e:any)=>{
      console.log(e);
    })
  }
}
