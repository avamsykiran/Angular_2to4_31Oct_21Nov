import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends!:string[];
  friend!:string;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(!this.friends)
      this.friends=[];

    this.friends.push(this.friend);
  }

  remove(){
    if(this.friends){
      let index = this.friends.findIndex(f =>f===this.friend);
      this.friends.splice(index,1);
    }
  }
}
