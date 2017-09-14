# Angular

## 主讲：崔译

### 一、Angular简介

用于解决、实现一个  SPA (Single Page Application 单页应用程序)

简化对DOM的操作，动态的更新DOM对象 

使用的是 模块化 开发思想

> ​	Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.

Angular 是一个 使用HTML 和 JavaScript 或者像是TypeScript一样能够编译成JavaScript的语言 来  创建客户端应用程序 框架

### 二、版本

Angular 只有4这个版本

1.x  2.x 叫做 AngularJS

分水岭：1 和 2

为什么没有3

```
https://github.com/angular/angular/blob/2.3.x/modules/%40angular/router/CHANGELOG.md
```

可以看到，在@augular/router 模块的版本 和Angular的版本 未对齐，导致使用上的混乱，因此Angular团队决定 跳过3这个版本  直接使用4

### 三、Angular程序架构

![framework](framework.png)

- 模块 Module

- 组件 Component

- 模板 Template

- 元数据 Metadata

- 数据绑定 data binding

- 指令 directive

- 服务 service

- 依赖注入 Dependency Injection

  ````
  用户  ===> root Module (是Angular应用程序的起始,入口,首页)
  Angular Application ==> 模块 + 模块 + 模块 + .... + 模块
  模块 ====》 组件 + 子模块 + 服务
  组件  ===》 组件三要素 + 可选要素
  组件三要素 ===> 模板 + 装饰器 + 控制器
  可选要素 ===> 输入属性 + 输出属性 + 提供器 + 生命周期函数 + 样式表 + 动画
  模板 ===> html + css + Angularized markup (Angular自己的标签)
  ````

  ![2](2.png)

### 四、开发环境的搭建

#### 1、安装NodeJS

#### 2、安装 Angular/CLI 

CLI : Command Line Interface 命令行接口（一些终端命令，用于快速搭建Angular项目以及开发===> 脚手架）

```powershell
【sudo】 cnpm install -g @angular/cli
ng -v
```





### 五、HelloWorld

#### 1、创建项目

```powershell
#切换到要创建项目的目录下
#ng new 项目名 [参数]
ng new itanyangular --routing
#Angular会创建一个项目，同时npm install 
#120M左右 ==> 下载很慢  ctrl + c
#切换到项目目录下(package.json所在目录)
cnpm install 
#npm config set registry https://registy.npm.taobao.org 
#ng set --global packageManager=cnpm 
```

#### 2、目录结构

**建议不要修改cli生成的文件或者文件夹的名字，除非你知道你在做什么**

```
项目
|---e2e 端到端的测试目录
|---node_modules 第三方的依赖包
|---src 应用程序源代码目录
	|---app 应用中的所有的组件或者模块 (i)
	|---assets 静态资源  图片等等
	|---environments Angular是支持多环境开发的(开发环境  测试环境  生产环境的配置)
	favicon.ico 图标文件
	index.html 首页(i)
	main.ts 整个app的入口，Angular会从该问价加载整个app(i)
	polyfills.ts 做老版本浏览器支持
	styles.css 全局样式文件(i)
	test.ts 测试文件
	tsconfig.app.json 编译器的配置文件
	tsconfig.spec.json
	typings.d.ts
.angular-cli.json cli工具的配置(i)
.editorconfig 编辑器配置文件
.gitignore git配置文件
karma.conf.js 单元测试
package.json npm工具的配置文件
protractor.conf.js 自动化测试的配置文件
README.md
tsconfig.json 定义typescript配置的配置文件
tslint.json 进行ts文件代码质量检测的配置文件
```

#### 3、运行HelloWorld

```powershell
ng serve
#需在项目目录下执行
#npm run start 
#start 是定义在package.json中的一个命令
```

#### 4、启动过程

```
.angular-cli.json 定义了应用程序首页和入口ts文件
--->index.html --> 加载页面
--->main.ts ---> bootstrapModule --> 引导模块 ---> 某个组件  --> 组件模板  css 选择器
---> 使用选择器，定位index.html中的第一个匹配标签，将模板的内容append到标签中
```



### 六、再探HelloWorld

#### 1、.angular-cli.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  // 项目相关信息
  "project": {
    // 项目名
    "name": "itanyangular"
  },
  //整个应用程序配置
  "apps": [
    {
      //根目录
      "root": "src",
      //项目发布时的输出目录
      "outDir": "dist",
      // 静态资源（文件/文件夹）
      "assets": [
        "assets",
        "favicon.ico"
      ],
      // 项目的首页
      "index": "index.html",
      // 指定项目入口（主加载文件）
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      // 定义全局样式，包括第三方样式库 bootstrap
      "styles": [
        "styles.css"
      ],
      // 全局js文件主要指第三方js  注意  需要描述文件
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json"
    },
    {
      "project": "src/tsconfig.spec.json"
    },
    {
      "project": "e2e/tsconfig.e2e.json"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {}
  }
}
```

#### 2、main.ts

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// bootstrapModule 定义引导(启动)模块=》AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
  // .catch(function(err){
  //   console.log(err)
  // })

```

#### 3、app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 装饰器 表示AppModule这个类是一个Angular的模块
@NgModule({
  //定义的是该模块中所有的组件
  declarations: [
    AppComponent
  ],
  // 导入的其他模块
  imports: [
    //默认情况下，只有BrowserModule 浏览器模块，该模块提供关于浏览器的支持
    BrowserModule,
    //路由模块，该模块是 --routing 产生的
    AppRoutingModule
  ],
  // 提供者 和DI 依赖注入相关的内容
  // 其实Angular是一个小型的IOC容器
  providers: [],
  // 启动引导组件
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 4、app.component.ts

```typescript
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

```

### 七、添加第三方类库

#### 1、下载类库

```powershell
#--save 将类库的依赖添加到package.json的dependency节点中 
#-dev 添加到package.json的devDependency节点中
cnpm install jquery --save
cnpm install bootstrap --save
```

#### 2、将类库引入到项目中

在 .angular-cli  文件中添加

```typescript
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.css"
],

"scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js"
],
```

#### 3、安装类型描述文件

为了能够在ts中使用jquery对象等

```powershell
#--save 将类库的依赖添加到package.json的dependency节点中 
#-dev 添加到package.json的devDependency节点中
cnpm install @types/jquery --save-dev
cnpm install @types/bootstrap --save-dev
```

### 八、组件-Component

#### 1、组件结构

![3](3.png)



#### 2、文件结构

```
src
|---app
    |--- 组件名
        |---组件名.component.css
        |---组件名.component.ts
        |---组件名.component.html
        |---组件名.component.spec.ts
```

#### 3、创建组件

##### 3-1 手动创建

根据文件结构创建组件中的各文件，修改app.mudule.ts文件，导入新建的组件

```typescript
// 装饰器 表示AppModule这个类是一个Angular的模块
@NgModule({
  //定义的是该模块中所有的组件
  declarations: [
    AppComponent,
    First
  ],
  //.......
}
```

##### 3-2 通过cli命令创建

```powershell
ng generate component  组件名
ng g component  组件名
```

### 九、模板

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  // 指定模板内容所在的文件
  templateUrl: './template.component.html',
  // 使用template指定模板内容
  // template:`<h1>hello template!!!<h1>`,
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

```

### 十、数据绑定

将组件对应的类中的属性和方法 绑定到 模板html上，当组件中的属性值更改的时候，页面会随之更改，而无须操作DOM

#### 1、前置知识

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

</head>
<body>
    
    <div id="d" style="color:rgba(21, 24, 218, 0.41)" someAttr="itany">aaaa</div>

    <table>
        <tr>
            <td id="td" colspan="2"></td>
        </tr>
    </table>

    <script>
        
        var div = document.getElementById("d");
        // 取的是dom对象的 dom 属性
        var value = div.someAttr;
        console.log(value);//=>undefined
        // html属性 ==》 html标签上的属性
        var value2 = div.getAttribute("someAttr");
        console.log(value2);//=> itany

        var style = div.style;
        console.log(style.color);

        var td = document.getElementById("td");
        console.log(".colspan =>" ,td.colspan);//==> undefined 
        console.log("getAttr=>",td.getAttribute("colspan"));//==> 2

    </script>

</body>
</html>
```

**模板数据绑定是通过dom属性和事件进行工作的**

#### 2、插值表达式

```
{{xxx}}
```

```typescript
<h1>插值表达式</h1>

<p>普通文本</p>
<p> {{ '这是普通的字符串文本' }} </p>
<p>进行计算</p>
<span>支持常用表达式,不支持位运算</span>
<p>{{ 2+3*2 }}</p>
<p>{{1 > 3}}</p>
<p>数据绑定</p>
<p>name : {{name}}</p>
```

```typescript
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
//
  }
}

```



#### 3、事件绑定

```html
<button (事件名/类似于jquery bind方法的事件名)="类中的方法名()" >xxxx</button>
<button (事件名/类似于jquery bind方法的事件名)="语句" >xxxx</button>
```



















