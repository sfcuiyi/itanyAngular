import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-item',
  templateUrl: './vote-item.component.html',
  styleUrls: ['./vote-item.component.css']
})
export class VoteItemComponent  {

  @Input()
  username:string;

  @Output()
  vote:EventEmitter<boolean> = new EventEmitter();

  flag:boolean = false;

  doVote(f)
  {
    this.flag = true;
    this.vote.emit(f);
  }
}
