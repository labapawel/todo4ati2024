import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgClass, NgFor } from '@angular/common';
import { TodoitemComponent } from '../todoitem/todoitem.component';

@Component({
  selector: 'app-kontener',
  standalone: true,
  imports: [NgFor, TodoitemComponent, NgClass],
  templateUrl: './kontener.component.html',
  styleUrl: './kontener.component.scss'
})
export class KontenerComponent {

  @Input() dane : Todo[] = [];
  @Input() title : string = "";
 


  get Hide(){
  //  console.log(this.dane.length==0)
    return this.dane.length==0;
  }
}
