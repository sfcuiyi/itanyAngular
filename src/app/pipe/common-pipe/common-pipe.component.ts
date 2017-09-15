import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-pipe',
  templateUrl: './common-pipe.component.html',
  styleUrls: ['./common-pipe.component.css']
})
export class CommonPipeComponent {

  num:number = 12.3;

  zbw:any = {
    name : 'cc',
    age : 90,
    sex:'unknown'
  }


  d:Date = new Date();

  constructor()
  {
    // alert(JSON.stringify(this.zbw));
  }
}
