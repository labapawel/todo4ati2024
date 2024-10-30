import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgClass, NgFor } from '@angular/common';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { CdkDragDrop, DragDropModule, moveItemInArray } from "@angular/cdk/drag-drop"
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-kontener',
  standalone: true,
  imports: [NgFor, TodoitemComponent, NgClass, DragDropModule],
  templateUrl: './kontener.component.html',
  styleUrl: './kontener.component.scss'
})
export class KontenerComponent {

  @Input() dane : Todo[] = [];
  @Input() title : string = "";
 
  drop(event: CdkDragDrop<Todo[]>){
    moveItemInArray(this.dane, event.previousIndex, event.currentIndex)
    this.serv.replace(this.dane);
  }

  constructor (private serv : TodoService){

  }


  get Hide(){
  //  console.log(this.dane.length==0)
    return this.dane.length==0;
  }
}
