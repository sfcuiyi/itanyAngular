import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
