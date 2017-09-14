import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent  {
  name:string = "老王";

  constructor()
  {
      setTimeout(()=>this.name="哈哈",3000);
      setTimeout(()=>this.imgUrl = "http://placehold.it/40x40",3000);
  }

  handleClickBtn(e)
  {
    // e 就是JavaScript中的事件对象
    // target 属性  就是  事件源 ==》 DOM对象
    console.log('按钮被点击',e?e.target.innerHTML:"");
    return "itany";
  }

  flag:boolean = true;

  toggle(){
    // if(this.flag)
    // {
    //   this.flag = false;
    // }else{
    //   this.flag = true;
    // }
    this.flag = !this.flag;
  }

  username:string="chw0564";
  imgUrl:string;
  nullUrl:string;


  setUsername()
  {
    this.username = "random:" + Math.random();
  }

  getUsername()
  {
    var input = document.getElementById("input");
    console.log("html=>", input.getAttribute("value"));
    console.log(this.username);
  }

  doOnInput(e)
  {
    console.log(e.target.value);
  }

  colspan:number=3;
  changeCol(n:number)
  {
    this.colspan += n;
  }


  divCls:string = "red green fs40";

  ngCls:any = {
    "red":true,
    "green":false,
    "fs40":true
  }

  ngStyle:any = {
    "background-color":"#ccc",
    "color":"#fff"
  }

  // msg:string;

  // changeMsg(e){
  //   this.msg = e.target.value;
  // }

  newMsg :string = "origin";
}
