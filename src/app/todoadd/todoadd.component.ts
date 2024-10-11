import { Component } from '@angular/core';
import { ProrityStatus } from "../prority";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoadd',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './todoadd.component.html',
  styleUrl: './todoadd.component.scss'
})
export class TodoaddComponent {
  public Prority: Array<ProrityStatus> = [
    {id:1, name:"Standardowy"},
    {id:100, name:"Pilny"},
  ]

  public Status: Array<ProrityStatus> = [
    {id:0, name:"Do wykonania"},
    {id:100, name:"W trakcie"},
    {id:1000, name:"Wykonane"},
  ]

  public dane: Todo = {name: "",  prority:this.Prority[0].id, description:"", status:this.Status[0].id}; 

  public dodaj() : void {
    console.log("dodaje", this.dane);
    
    this.serwis.add(this.dane);
  }

  constructor (private serwis: TodoService){

  }
}
