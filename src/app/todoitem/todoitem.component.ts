import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.scss'
})
export class TodoitemComponent {
 @Input() element: Todo = {active: false, description:"", name:"", prority:0, status:0}

 ngOnInit(){
     this.element.startDate = this.element.startDate ? new Date(this.element.startDate) : undefined;
     this.element.endDate = this.element.endDate ? new Date(this.element.endDate) : undefined;
     console.log(this.element);
 }

}