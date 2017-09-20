import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {

  constructor(
    private http:Http
  ) { }

  msg:string;
  data:any;

  loadData()
  {
    let url:string = "/api";
    let body :any = {
      "key":"397bdd94b69f440b91d9e020da625c73",
      "info":this.msg,
      "userid":"123",
    };
    // Observable 来自于rxjs 响应式js Reactive Extensions for JavaScript,Javascript的响应式扩展,
    let response:Observable<any>  =   this.http.post(url,body);
    //对于Observable类型参数，都可以对其进行订阅操作 类似于Promise中的then
    response.subscribe((data)=>{
      console.log(data);
      this.data = data.json().text;
    });
  }
  

}
