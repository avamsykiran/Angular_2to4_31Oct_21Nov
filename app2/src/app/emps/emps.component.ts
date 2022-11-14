import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeptsService } from '../services/depts.service';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent implements OnInit {

  dname!:string|undefined;

  constructor(private activatedRoute:ActivatedRoute,private deptsService:DeptsService) { }

  ngOnInit(): void {
    let deptId = this.activatedRoute.snapshot.params['deptId'];
    this.dname = this.deptsService.getById(deptId)?.name;
  }

}
