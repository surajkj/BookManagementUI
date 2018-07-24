import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LibraryComponent } from './library/library.component';
import { LibrarybookComponent } from './librarybook/librarybook.component';
import { BookComponent } from './book/book.component';
import { PlcontainerComponent } from './plcontainer/plcontainer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent],
  declarations: [ HeaderComponent, FooterComponent, HomeComponent, UserComponent, LibraryComponent, LibrarybookComponent, BookComponent, PlcontainerComponent],
  exports: [PlcontainerComponent]
})
export class PostloginModule { }