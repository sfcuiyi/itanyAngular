import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistComponent } from './route/regist/regist.component';
import { LoginComponent } from './route/login/login.component';
import { AboutusComponent } from './route/aboutus/aboutus.component';
import { NotfoundComponent } from './route/notfound/notfound.component';
import { DatabindComponent } from './databind/databind.component';
import { DirComponent } from './dir/dir.component';
import { ParentRouterComponent } from './route/parent/parent.component';
import { ChildComponent } from './route/child/child.component';
import { EditComponent } from './route/edit/edit.component';
import { Gard } from './route/Gard';

const routes: Routes = [
  //url 和 组件的映射关系
  // path可以为空，空代表默认路径（首页）

  
  {path:'',redirectTo:'regist',pathMatch:'full'},
  // {path:'',component:RegistComponent},
  {path:'regist',component:RegistComponent},  
  // 在url中一部分出现** ， 不代表通配符
  {path:'regist/**',component:RegistComponent},
  // redirectTo:重定向到
  // /loginPage/log  ==> prefix ===> 匹配前缀 ===> 使用redirectTo的值替换前缀 ===> aaa/log
  // /loginPage/log  ==> full ===> 完全匹配 ===> 'loginPage/log' ==> LoginComponent
  //  注意：   1、路由的匹配策略pathMatch prefix代表匹配前缀（默认值）,full 完全匹配
  //          2、'' 是所有的url的前缀
  //              ====> 所有的url都匹配'' 
  //              ====> "" 如果使用重定向路由，一定要提供pathMatch  并且值要是 full
  {path:'loginPage',redirectTo:"aaa",pathMatch:"prefix"},
  {path:'loginPage/log',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutusComponent},
  {path:'about/:someName',component:AboutusComponent},
  {path:'databind',component:DatabindComponent},
  {path:'dir',component:DirComponent},
  {
    path:'parent',
    component:ParentRouterComponent
    ,children:[
      {path:'',component:ParentRouterComponent},
      // /parent/child
      // 会使用组件模板替换parent组件模板中的router-outlet
      {path:'child',component:ChildComponent}
    ]
  }, 
  // {path:'parent/child',component:ChildComponent},
  {path:"loginWithOther",component:LoginComponent,outlet:'otherOutlet'},
  {path:"edit",component:EditComponent,
    canActivate:[Gard],
    canDeactivate:[Gard],
    resolve:{
      result:Gard
    }
  },
  //在路由的最后位置，可以配置带有通配符的映射关系
  //路由的匹配规则是从上到下（从数组的第一个元素开始），依次匹配 ，直到找到第一个匹配的路由
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
