import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpsService } from '../services/emps.service';

@Component({
  selector: 'app-emps-form',
  templateUrl: './emps-form.component.html',
  styleUrls: ['./emps-form.component.css']
})
export class EmpsFormComponent implements OnInit {

  idFC: FormControl;
  fullNameFC: FormControl;
  mobileFC: FormControl;
  mailFC: FormControl;
  salaryFC: FormControl;
  deptIdFC: FormControl;

  empForm:FormGroup;

  constructor(
    private acitvatedRoute: ActivatedRoute,
    private empsService:EmpsService,
    private router:Router
    ) {
    let deptId = parseInt(this.acitvatedRoute.snapshot.parent?.params["deptId"]);

    this.idFC=new FormControl(0);
    this.fullNameFC=new FormControl('',[Validators.required]);
    this.mobileFC=new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailFC=new FormControl('',[Validators.required,Validators.email]);
    this.salaryFC=new FormControl('',[Validators.required]);
    this.deptIdFC=new FormControl(deptId);

    this.empForm = new FormGroup({
      id:this.idFC,
      fullName:this.fullNameFC,
      salary:this.salaryFC,
      mobile:this.mobileFC,
      mail:this.mailFC,
      deptId:this.deptIdFC
    })
  }

  ngOnInit(): void {

  }

  formSubmitted(){
    this.empsService.add(this.empForm.value);
    this.router.navigateByUrl("/emps/"+this.empForm.value.deptId+"/list");
  }
}
