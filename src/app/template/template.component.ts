import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  // 指定模板内容所在的文件
  templateUrl: './template.component.html',
  // 使用template指定模板内容
  // template:`<h1>hello template!!!<h1>`,
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
