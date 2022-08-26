import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Fill all the fields below"
  userDetails={
    firstname:"",
    lastname:"",
    age:0
  }

  save(){
    console.log(this.userDetails.firstname+" "+this.userDetails.lastname);
    console.log("Age of the user"+this.userDetails.age);
  }
}
