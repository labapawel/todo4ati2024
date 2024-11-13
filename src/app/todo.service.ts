import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs';
import { ProrityStatus } from './prority';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  static lastID=0;
  private _listaTODO : Array<Todo> = [];
  private _connect : BehaviorSubject<Array<Todo>> = new BehaviorSubject<Array<Todo>>(this._listaTODO)
  public Prority: Array<ProrityStatus> = [
    {id:1, name:"Standardowy"},
    {id:100, name:"Pilny"},
  ]

  public Status: Array<ProrityStatus> = [
    {id:0, name:"Do wykonania"},
    {id:100, name:"W trakcie"},
    {id:1000, name:"Wykonane"},
  ]


  constructor() {
    this.load();
   
    
   }
  public async add(dane: Todo){
    fetch("api/update", {
      method:"post",
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(dane)
    })
    .then(e=>e.json())
    .then(status=>{
      this.load();
    })


  }
 public  async update(dane: Todo){


    fetch("api/update", {
      method:"post",
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(dane)
    })
    .then(e=>e.json())
    .then(status=>{
      this.load();
    })

  }

  save(){
    localStorage.setItem('todo4a', JSON.stringify(this._listaTODO));
  }
  load(){
    fetch('/api/data')
      .then(e=>e.json())
      .then(json=>{
        this._listaTODO=json;
        console.log(json);
        this._listaTODO.forEach(e => {
          e.prority = parseInt(e.prority.toString());
          e.endDate = e.endDate?new Date(e.endDate):undefined;
          e.startDate = e.startDate?new Date(e.startDate):undefined;
        })
        TodoService.lastID = Math.max(...this._listaTODO.map(e=>e.id));
        this._connect.next(this._listaTODO);
      })    


  }
  public delete(id:number){
    fetch("api/delete", {
      method:"post",
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify({'deleteid': id})
    })
    .then(e=>e.json())
    .then(status=>{
      this.load();
    })    
  }

  public replace(data: Todo[]){
    data.forEach(element=>{
      this._listaTODO = this._listaTODO.filter(elemx=>elemx != element);
    })
    this._listaTODO = [...this._listaTODO, ...data];
    this.save();
    this._connect.next(this._listaTODO);
  }

  public subscribe() {
    return this._connect.asObservable();
  }


}
