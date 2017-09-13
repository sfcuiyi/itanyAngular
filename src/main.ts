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
