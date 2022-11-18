import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptsService } from '../services/depts.service';

@Component({
  selector: 'app-dept-row',
  templateUrl: './dept-row.component.html',
  styleUrls: ['./dept-row.component.css']
})
export class DeptRowComponent implements OnInit {

  @Input()
  dept!:Dept;

  @Output()
  refresh:EventEmitter<void>;

  @Output()
  markEdit:EventEmitter<number>;

  constructor(private deptsService:DeptsService) {
    this.refresh=new EventEmitter<void>();
    this.markEdit=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  deleteDept(){
    if(window.confirm("Are you sure of deleting Dept#"+this.dept.id+"?")){
      this.deptsService.deleteById(this.dept.id).subscribe({
        next: () => this.refresh.emit()
      });
    }
  }

  markEditable(){
    this.markEdit.emit(this.dept.id);
  }
}
