import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs';
import { json } from 'express';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _listaTODO : Array<Todo> = [];
  private _connect : BehaviorSubject<Array<Todo>> = new BehaviorSubject<Array<Todo>>(this._listaTODO)
  constructor() {
    this.load();
    this._connect.next(this._listaTODO);
    
   }
  public add(dane: Todo){
    this._listaTODO.push(dane);
    this.save();
    this._connect.next(this._listaTODO);
  }

  save(){
    localStorage.setItem('todo4a', JSON.stringify(this._listaTODO));
  }
  load(){
    let dane = localStorage.getItem('todo4a');
    if(!dane){
      dane = '[]';
    }
    this._listaTODO = JSON.parse(dane);
  }

  public subscribe() {
    return this._connect.asObservable();
  }


}
