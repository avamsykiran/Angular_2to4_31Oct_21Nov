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
  errMsg!:string;

  constructor(private deptsService:DeptsService) {
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.deptsService.getAll().subscribe({
      next: data => this.depts=data,
      error: err =>{ console.error(err);this.errMsg="Unable to load data!" }
    })
  }

  doMarkEdit(id:number){
    let index = this.depts.findIndex(d => d.id==id);
    this.depts[index].editable=true;
  }

  doUnMarkEdit(id:number){
    let index = this.depts.findIndex(d => d.id==id);
    this.depts[index].editable=undefined;
  }
}
