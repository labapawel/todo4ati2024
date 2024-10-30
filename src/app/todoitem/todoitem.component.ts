import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.scss'
})
export class TodoitemComponent {
 @Input() element: Todo = {active: false, id:-1, description:"", name:"", prority:0, status:0}
 public wyswietl = false;
 constructor (private router: Router, private service : TodoService){
 }

 public edit(id?:number): void{
    this.router.navigate(['/add', id]);
 }

public remove(id: number){
  this.service.delete(id);
}

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
