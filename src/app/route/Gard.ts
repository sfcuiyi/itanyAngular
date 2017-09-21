import { CanActivate, CanDeactivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EditComponent } from "./edit/edit.component";
import { Injectable } from '@angular/core';

@Injectable()
export class Gard implements CanActivate,CanDeactivate<EditComponent>,Resolve<string>{
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // 进入路有前执行，用于初始化数据
        console.log("准备进入eidt")
        return null;
    }
    canDeactivate(component: EditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
        // 返回boolean类型  true 能离开 路由
        if(component.username != "aaa")
        {
            return window.confirm("您输入的内容不是aaa，确认要离开吗？");
        }
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // 返回boolean类型  true 能进入/激活 路由
        let name = route.queryParams["username"];
        return name == "admin";
    }

}