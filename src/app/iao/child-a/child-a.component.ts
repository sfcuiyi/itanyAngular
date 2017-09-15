import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent{

  //该属性是一个输入属性
  @Input()
  childAname:string;

  //该属性是一个输入属性
  @Input()
  childAage:string;


}
