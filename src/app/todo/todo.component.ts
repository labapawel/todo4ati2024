import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { KontenerComponent } from '../kontener/kontener.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [KontenerComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public naDzis : Todo[] = [];
  public stare  : Todo[] = [];
  public przysle: Todo[] = [];
  public anulowane: Todo[] = [];

  constructor (private serwis:TodoService) {
    serwis.subscribe().subscribe((e:Todo[])=>{
        let now = new Date();
        console.log(e);

        this.anulowane = e.filter(x=>!x.active);
        this.stare = e.filter(x=>(x.endDate!==undefined && new Date(x.endDate) < now ) &&
        !x.active && [0,100].indexOf(parseInt(x.status.toString())) >= 0 
        );

        this.przysle = e.filter(x=>
          ((x.startDate!== undefined && new Date(x.startDate) > now) || x.startDate === undefined || 
               x.endDate === undefined) && x.active &&
               [0,100].indexOf(parseInt(x.status.toString())) >= 0
        )

        this.naDzis = e.filter(x=>
            (x.startDate!== undefined && new Date(x.startDate) <= now) && 
            (x.endDate!==undefined && new Date(x.endDate) >= now )
            && x.active &&
            [0,100].indexOf(parseInt(x.status.toString())) >= 0
          );
                                  
          console.log("stare", this.stare);
          console.log("na dzis", this.naDzis);
          console.log("przysle", this.przysle);
          console.log("anulowane", this.anulowane);
          
    })
  }
}
