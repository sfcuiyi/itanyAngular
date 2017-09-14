import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  xiedong:string='abc';


  addrs:Array<string> = "南京,徐州,上海,苏州,无锡,常州,北京".split(",");
  

}
