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

  @Output()
  unMarkEdit:EventEmitter<number>;

  constructor(private deptsService:DeptsService) {
    this.dept= {id:0,name:'',location:''};
    this.refresh=new EventEmitter<void>();
    this.unMarkEdit=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    let ob =null;
    if(this.dept.editable){
      this.dept.editable=false;
      ob = this.deptsService.update(this.dept)
    }else{
      ob = this.deptsService.add(this.dept);
      this.dept= {id:0,name:'',location:''};
    }

    ob.subscribe({
      next: () => this.refresh.emit()
    });
  }

  unMarkEditable(){
    this.unMarkEdit.emit(this.dept.id);
  }
}
