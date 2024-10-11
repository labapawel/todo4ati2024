import { Component } from '@angular/core';
import { ProrityStatus } from "../prority";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todoadd',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './todoadd.component.html',
  styleUrl: './todoadd.component.scss'
})
export class TodoaddComponent {

  public dane: Todo = {name: "",  prority:1, description:"", endDate: new Date(), startDate: new Date(), status:0, active: true}; 

  public dodaj() : void {
    console.log("dodaje", this.dane);
    
    this.serwis.add(this.dane);
    this.reuter.navigate(['/'])
  }

  constructor (public serwis: TodoService, private reuter : Router){

  }
}
