import { Component } from '@angular/core';
import { ProrityStatus } from "../prority";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todoadd',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './todoadd.component.html',
  styleUrl: './todoadd.component.scss'
})
export class TodoaddComponent {

  public dane: Todo = {name: "",  prority:1, description:"", endDate: new Date(), startDate: new Date(), status:0, active: true}; 
  private daneTab : Todo[] = [];
  public dodaj() : void {
    console.log("dodaje", this.dane);
    
    this.serwis.add(this.dane);
    this.reuter.navigate(['/'])
  }

  constructor (public serwis: TodoService, private reuter : Router,
    private route : ActivatedRoute
  ){
    serwis.subscribe().subscribe(e=>{
        this.daneTab = e as Todo[];
    })
  }
  paramId: number = 0;

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    this.paramId = parseInt(param != undefined ? param : "0");
    let res = this.daneTab.filter(e=>e.id==this.paramId);
    if(res.length >0 )
       this.dane = res[0];

    console.log("ngoninit");
  }
  startDateChange(event:Event){
    let input : HTMLInputElement = event.target as HTMLInputElement; 
    this.dane.startDate = new Date(input.value);
  }
  get endDate() : string{
   return this.dane.endDate!= undefined ? this.dane.endDate?.toLocaleDateString().split('.')
            .reverse().join('-') : "";
  }
  get startDate() : string{
   return this.dane.startDate!= undefined ? this.dane.startDate?.toLocaleDateString().split('.') // DD.MM.YYYY
            .reverse().join('-') : "";
  }
  endDateChange(event:Event){
    let input : HTMLInputElement = event.target as HTMLInputElement; 
    this.dane.endDate = new Date(input.value);
  }
}
