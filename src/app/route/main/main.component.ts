import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public curDate :Date;

  constructor(
    private router:Router
  ) { 
    this.curDate = new Date();
  }

  ngOnInit() {
  }

  toDir()
  {
    // 参数是一个[]，数组中包含路径,和 routerLink的值一致
    this.router.navigate(['/dir']);
  }


}
