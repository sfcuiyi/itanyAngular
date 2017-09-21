import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistComponent } from './route/regist/regist.component';
import { LoginComponent } from './route/login/login.component';
import { AboutusComponent } from './route/aboutus/aboutus.component';

const routes: Routes = [
  //url 和 组件的映射关系
  // path可以为空，空代表默认路径（首页）
  {path:'',component:RegistComponent},
  {path:'regist',component:RegistComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
