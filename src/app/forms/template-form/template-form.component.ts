import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent  {

  doSiubmitForm(form,e)
  {
    console.log("success/fail",form);
    // e.target.submit();
    //ajax submit
    // 模拟表单提交
    // 将相应的错误信息放到相应的input后面
    // 用户名不能为空，name必须4-8位，密码6位以上，并且只能为数字，重复密码和密码一致 ==》 success
    //  否则：fail

  }
 

}
