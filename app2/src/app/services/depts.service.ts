import { Injectable } from '@angular/core';
import { Dept } from '../models/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptsService {

  depts: Dept[];

  constructor() {
    this.depts = [
      { id: 1, name: 'Accounts', location: 'Mumbai' },
      { id: 2, name: 'HR', location: 'Hyderabad' },
      { id: 3, name: 'RnD', location: 'Vizag' }
    ];
  }

  getAll():Dept[]{
    return [...this.depts];
  }

  getById(id:number):Dept|undefined{
    return this.depts.find(d => d.id==id);
  }

  add(dept:Dept):Dept{
    this.depts.push(dept);
    return dept;
  }

  update(dept:Dept):Dept{
    let index = this.depts.findIndex(d => d.id===dept.id);
    if(index>-1){
      this.depts[index]=dept;
    }
    return dept;
  }

  deleteById(id:number):void{
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts.splice(index,1);
    }
  }
}
