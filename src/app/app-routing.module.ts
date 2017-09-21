import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistComponent } from './route/regist/regist.component';
import { LoginComponent } from './route/login/login.component';
import { AboutusComponent } from './route/aboutus/aboutus.component';
import { NotfoundComponent } from './route/notfound/notfound.component';
import { DatabindComponent } from './databind/databind.component';
import { DirComponent } from './dir/dir.component';

const routes: Routes = [
  //url 和 组件的映射关系
  // path可以为空，空代表默认路径（首页）
  {path:'',component:RegistComponent},
  {path:'regist',component:RegistComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutusComponent},
  {path:'databind',component:DatabindComponent},
  {path:'dir',component:DirComponent},
  //在路由的最后位置，可以配置带有通配符的映射关系
  //路由的匹配规则是从上到下（从数组的第一个元素开始），依次匹配 ，直到找到第一个匹配的路由
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
