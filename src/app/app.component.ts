import { Component } from '@angular/core';

// 一般情况下一个组件包括一个ts 文件  一个html文件  一个css文件
// 这三个文件文件名相同，放在同一个文件夹下
// 用于表示下面的类是一个 组件
@Component({
  // 选择器 --> id 类  标签(建议)  父子 
  selector: 'app-root',
  // selector: '.cc',
  // 组件模板所在的文件
  templateUrl: './app.component.html',
  // 模板对应的css文件
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Itany';
  hello = '你好';
}


