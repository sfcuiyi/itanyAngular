import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  // 该属性是一个输出属性
  // 对于输出属性的类型，是一个EventEmitter<原始类型>的类型
  @Output()
  backName:EventEmitter<string> = new EventEmitter<string>();

  sendBack(){
    //this.backName = this.childAname.toUpperCase();
    // 调用该属性的emit方法，参数是想要传递的数据/参数是事件源
    // EventEmiiter 用于触发一个事件的类  emit方法是触发事件
    // 触发一个backName事件
    this.backName.emit(this.childAname.toUpperCase());
  }

}
