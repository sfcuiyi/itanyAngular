import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from "@angular/forms";
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
    // FormControl对象是一个数组
    //  数组的第一个参数是该表单标签的value
    //  第二个参数是一个方法或者方法数组，该方法用于数据的校验
    // Angular允许使用内置的校验器或者自定义校验方法进行数据校验
    this.myForm = builder.group({
      
      // Validators 内置校验器，主要包括
      /*
       *  min:最小值
       *  minLength：最小长度
       *  max：最大值
       *  maxLength：最大长度
       *  pattern：正则表达式
       *  required ：必须的
       *  email：邮件
       *  其他校验器参考API
       */
      // 用户名不能为空，至少6位
      username:['',[Validators.required,Validators.minLength(6)]],
      //年龄1-2岁
      age : ['',[Validators.min(1),Validators.max(2)]],
      
      // 密码和重复密码必须相等
      pwdGroup:builder.group({
        // 长度至少4位
        pwd:['',Validators.minLength(4)],
        repwd:[]
      },{validator:this.repwdValidator}),
      emails:builder.array([],Validators.email)
    });
  }

  //该方法应该存在一个参数，参数类型可以是FormControl、FormArray、FormGroup
  // 方法的返回值是一个JSON对象，对象的key必须是string类型
  repwdValidator(pwdGroup:FormGroup):{[key:string]:any}
  {
    let pwd:FormControl = pwdGroup.get("pwd") as FormControl;
    let repwd :FormControl  = pwdGroup.get("repwd") as FormControl;
    // console.log("==>",pwd.value);
    console.log("pwd == repwd",pwd.value == repwd.value ,".."+pwd.value+",,")
    return  pwd.value == repwd.value ?  null : {"error":"两次密码不一致"};
  }

  doAddEmail()
  {
    let fa : FormArray = this.myForm.get('emails') as FormArray;
    fa.push(new FormControl());
  }

  doSubmitForm()
  {
    // console.log(this.myForm);
    // console.log(this.myForm.errors);
    // console.log(this.myForm.get("username").errors.minlength);
    // console.log(this.myForm.getError('minlength',['username']));
    console.log(this.myForm.invalid)

    console.log(this.myForm.hasError("max",["age"]));


    console.log("error==>",this.myForm.get("emails").errors);
   }

}

