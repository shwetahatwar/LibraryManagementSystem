import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BooksService } from './books.service';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    BooksListComponent,
    AboutComponent,
    HelpComponent,
    BooksDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'books-add', component: AddBooksComponent, canActivate: [UserService] },
      { path: 'books-list', component: BooksListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'help', component: HelpComponent },
      { path: 'books-details', component: BooksDetailsComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    BooksService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
