import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptsService } from '../services/depts.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  depts!:Dept[];

  constructor(private deptsService:DeptsService) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData(){
    this.depts=this.deptsService.getAll();
  }
}
