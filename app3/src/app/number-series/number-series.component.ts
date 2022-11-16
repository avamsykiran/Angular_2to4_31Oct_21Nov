import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb:number;
  ub:number;
  isJobRunning:boolean;

  errMsg!:string;
  results!:number[];

  constructor(private nss:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.isJobRunning=false;
  }

  ngOnInit(): void {
  }

  start(){
    this.results=[];
    this.isJobRunning=true;

    let ob = this.nss.generateSeries(this.lb,this.ub);

    ob.subscribe({
      next: val => { this.results.push(val) },
      error: err => { this.errMsg=err; this.isJobRunning=false;},
      complete: () => { this.isJobRunning=false; }
    })
  }
}
