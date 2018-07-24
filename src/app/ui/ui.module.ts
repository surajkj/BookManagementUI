import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { UserComponent } from './auth/user/user.component';
import { LibraryComponent } from './auth/library/library.component';
import { LibrarybookComponent } from './auth/librarybook/librarybook.component';
import { BookComponent } from './auth/book/book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
  declarations: [ HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, HomeComponent, UserComponent, LibraryComponent, LibrarybookComponent, BookComponent],
  exports: [LoginComponent]
})
export class UiModule { }