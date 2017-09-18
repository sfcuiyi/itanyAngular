import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent  {

  agreeNum:number = 0;
  disAgreeNum:number = 0;
  items:Array<string> = [];
  name:string;
  doAdd()
  {
    this.items.push(this.name+"");
    this.name = "";
    $("#target").focus();
    this.isPassed = this.agreeNum * 2 > this.items.length;
  }

  isPassed:boolean = false;

  changeNums(e)
  {
    e ? this.agreeNum++ : this.disAgreeNum++;
    // 同意人数大于总投票人数的一半
    this.isPassed = this.agreeNum * 2 > this.items.length;
  }

}
