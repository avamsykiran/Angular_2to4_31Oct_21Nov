import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName:string;

  logos:string[];
  logoIndex:number;

  constructor() {
    this.userName="Vamsy Kiran";
    this.logos=[
      "assets/imgs/n1.png",
      "assets/imgs/n2.jpg",
      "assets/imgs/n3.jpg",
      "assets/imgs/n4.jpg"
    ];
    this.logoIndex=0;
  }

  ngOnInit(): void {
  }

  toggle(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }

}
