import { Component, OnInit } from '@angular/core';
import { MathserviceService } from '../mathservice.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent {
  constructor(public s:MathserviceService) {
  }

  m:number;
  n:number;
  result:number;

  doPlus()
  {
    this.result = this.s.plus(this.m*1,this.n*1);
  }

  doMins()
  {
    this.result = this.s.mins(this.m,this.n);
  }

}
