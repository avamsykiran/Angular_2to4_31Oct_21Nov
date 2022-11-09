import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptsService } from '../services/depts.service';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {

  @Input()
  dept:Dept;

  @Output()
  refresh:EventEmitter<void>;

  constructor(private deptsService:DeptsService) {
    this.dept= {id:0,name:'',location:''};
    this.refresh=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    if(this.dept.editable){
      this.dept.editable=false;
      this.deptsService.update(this.dept);  
    }else{
      this.deptsService.add(this.dept);
      this.dept= {id:0,name:'',location:''};
    }
    this.refresh.emit();
  }

  unMarkEditable(){
    this.dept.editable=false;
    this.deptsService.update(this.dept);
    this.refresh.emit();
  }
}
