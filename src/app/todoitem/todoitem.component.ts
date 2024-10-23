import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.scss'
})
export class TodoitemComponent {
 @Input() element: Todo = {active: false, description:"", name:"", prority:0, status:0}


 get pilne(): boolean{
  console.log([100].indexOf(this.element.prority), this.element.prority);
  
    return [100].indexOf(this.element.prority) >= 0;
 } 

 ngOnInit(){
     this.element.startDate = this.element.startDate ? new Date(this.element.startDate) : undefined;
     this.element.endDate = this.element.endDate ? new Date(this.element.endDate) : undefined;
     console.log(this.element);
 }

}
