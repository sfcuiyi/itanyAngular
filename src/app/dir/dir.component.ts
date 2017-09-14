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


  addrs:Array<string> = "南京,徐州,上海,苏州,无锡,常州,北京,<a href='#'>aa</a>".split(",");

  users:Array<any> = [
    {"username":"zhangsan1","password":"1231"},
    {"username":"zhangsan2","password":"1232"},
    {"username":"zhangsan3","password":"1233"},
    {"username":"zhangsan4","password":"1234"},    
    {"username":"zhangsan5","password":"1235"},
  ];

  city:string;
  addCity(){
    this.addrs.push(this.city);
  }
}
