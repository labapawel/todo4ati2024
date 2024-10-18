import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-kontener',
  standalone: true,
  imports: [NgFor],
  templateUrl: './kontener.component.html',
  styleUrl: './kontener.component.scss'
})
export class KontenerComponent {

  @Input() dane : Todo[] = [];
  @Input() title : string = "";
  constructor(){
    console.log(this.dane);
  }
}
