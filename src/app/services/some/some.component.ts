import { Component, OnInit } from '@angular/core';
import { MathserviceService } from '../mathservice.service';
import { SomeService } from '../someService/SomeService';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent {
  constructor(public s:MathserviceService) {
  }

  // constructor(
  //   public s:SomeService
  // )
  // {

  // }

  m:number;
  n:number;
  result:number;

  doPlus()
  {
    this.result = this.s.plus(this.m*1,this.n*1);
  }

  doMins()
  {
    // this.result = this.s.mins(this.m,this.n);
  }

}
