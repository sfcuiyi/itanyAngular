import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent {

  //有一个表单
  // 表单中应该包含一个或者多个表单标签
  // myForm中应该包含一个或者多个FormControl
  // myForm:FormGroup = new FormGroup({
  //   //对象中定义FormControl或者FormGroup或者FormArray
  //   username:new FormControl("someName"),
  //   age:new FormControl(3),
  //   pwdGroup:new FormGroup({
  //     pwd:new FormControl(),
  //     repwd:new FormControl()
  //   }),
  //   emails:new FormArray([
  //     new FormControl("a@a.com"),
  //     new FormControl("b@b.com")
  //   ])
  // });

  myForm:FormGroup;
  constructor(builder:FormBuilder)
  {
    this.myForm = builder.group({
      username:['someVal'],
      age : [],
      pwdGroup:builder.group({
        pwd:[],
        repwd:[]
      }),
      emails:builder.array([
        ['a@a.com2'],
        ['b@b.com2']
      ])
    });
  }

  doAddEmail()
  {
    let fa : FormArray = this.myForm.get('emails') as FormArray;
    fa.push(new FormControl("x@x.com"));
  }

  doSubmitForm()
  {
    console.log(this.myForm);
  }

}

