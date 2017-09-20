import { Component, OnInit } from '@angular/core';
import { Http ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {

  constructor(
    private http:Http, 
  ) { }

  msg:string;
  data:any = {
    result:[
      {}
    ]
  };

  loadData()
  {
    let url:string = "/openapi/api";
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

  loadWeather()
  {
    let url = `/weather/index?format=2&cityname=${this.msg}&key=3b005a8e40325ef5aa6bfb908dfbac77`;
    this.http
        .get(url)
        .subscribe((data)=>{
          this.data = data;
        })
  }
  

  loadBus()
  {
    //b445baba27cb198d90c1640836ad0891
    let url = "/189/bus/busline";
    // 用于构建post请求的参数
    let params:URLSearchParams = new URLSearchParams();
    // 第一个参数是 要传递的参数的key  第二个参数是value
    params.append("key","b445baba27cb198d90c1640836ad0891");
    params.append("city",this.msg.split(";")[0]);
    params.append("bus",this.msg.split(";")[1]);
    this.http
        .post(url,params)
        .subscribe((data)=>{
          this.data = data.json();
          console.log(this.data);
        })
  }

}
