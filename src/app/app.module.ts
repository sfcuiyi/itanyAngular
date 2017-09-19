import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { DatabindComponent } from './databind/databind.component';
import { DirComponent } from './dir/dir.component';
import { DirexeComponent } from './direxe/direxe.component';
import { CommonPipeComponent } from './pipe/common-pipe/common-pipe.component';
import { PowPipe } from './pipe/pow/pow.pipe';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { DataFilterPipe } from './pipe/data-filter/data-filter.pipe';
import { OrderByPipe } from './pipe/order-by/order-by.pipe';
import { ParentComponent } from './iao/parent/parent.component';
import { ChildAComponent } from './iao/child-a/child-a.component';
import { ChildBComponent } from './iao/child-b/child-b.component';
import {VoteComponent} from './homework/vote/vote.component';
import {VoteItemComponent} from './homework/vote-item/vote-item.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReativeFormComponent } from './forms/reative-form/reative-form.component';
import { MathserviceService } from './services/mathservice.service';
import { SomeComponent } from './services/some/some.component';
@NgModule({
    
  declarations: [
    AppComponent,
    TemplateComponent,
    DatabindComponent,
    DirComponent,
    DirexeComponent,
    CommonPipeComponent,
    PowPipe,
    FilterPipe,
    DataFilterPipe,
    OrderByPipe,
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    VoteComponent,
    VoteItemComponent,
    TemplateFormComponent,
    ReativeFormComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 模板式表单
    FormsModule,
    //响应式表单
    ReactiveFormsModule
  ],
  // 配置provider
  // 写在providers中的类，可以通过构造方法注入给其他所有的组件或者service
  providers: [
    //方式1
    MathserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
