import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emp } from '../models/emp';
import { EmpsService } from '../services/emps.service';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent implements OnInit {

  emps!:Emp[];

  constructor(private acitvatedRoute:ActivatedRoute,private empsService:EmpsService) { }

  ngOnInit(): void {
    let deptId = this.acitvatedRoute.snapshot.parent?.params["deptId"];
    this.empsService.getAllByDeptId(deptId).subscribe({
      next: data => this.emps =data
    })
  }

}
