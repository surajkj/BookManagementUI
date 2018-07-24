import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreloginModule } from './pre-login/prelogin.module';
import { PostloginModule } from './post-login/postlogin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PreloginModule,
    PostloginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
