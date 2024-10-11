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
  public naDzis : Todo[] = [];
  public stare  : Todo[] = [];
  public przysle: Todo[] = [];

  constructor (private serwis:TodoService) {
    serwis.subscribe().subscribe((e:Todo[])=>{
        let now = new Date();
        // this.naDzis = e.filter(x=>x.startDate >= now && x.startDate <= now )

    })
  }
}
