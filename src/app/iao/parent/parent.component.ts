import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:string = "aa";

  constructor() { }

  ngOnInit() {
  }

  childABackName:string;
  someBValue:string;
  handleBackName(e)
  {
    this.childABackName = e;
    this.someBValue = e;
  }
}
