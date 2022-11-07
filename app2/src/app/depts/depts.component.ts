import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  depts:Dept[];

  constructor() {
    this.depts=[
      {id:1,name:'Accounts',location:'Mumbai'},
      {id:2,name:'HR',location:'Hyderabad'},
      {id:3,name:'RnD',location:'Vizag'}
    ];
  }

  ngOnInit(): void {
  }

}
