import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  registUser:string;
  otherName:string;
  constructor(
    private activitedRoute:ActivatedRoute
  ) { 
    this.registUser = this.activitedRoute.snapshot.queryParams["name"];
    this.otherName = this.activitedRoute.snapshot.params["someName"];
  }

  ngOnInit() {
  }

}
