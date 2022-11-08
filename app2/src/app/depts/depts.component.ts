import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptsService } from '../services/depts.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  depts:Dept[];

  constructor(private deptsService:DeptsService) {
    this.depts=deptsService.getAll();
  }

  ngOnInit(): void {
  }

  deleteDept(id:number){
    if(window.confirm("Are you sure of deleting Dept#"+id+"?")){
      this.deptsService.deleteById(id);
      this.depts=this.deptsService.getAll();
    }
  }
}
