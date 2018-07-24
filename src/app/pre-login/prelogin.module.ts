import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LayoutComponent } from './layout/layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PreloginfooterComponent } from './preloginfooter/preloginfooter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
  declarations: [ LoginComponent, RegisterComponent, PreloginfooterComponent],
  exports: [LoginComponent]
})
export class PreloginModule { }