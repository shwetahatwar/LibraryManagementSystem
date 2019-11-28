import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AddBooksComponent } from './add-books/add-books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudentListByAdminComponent } from './student-list-by-admin/student-list-by-admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    BooksListComponent,
    AboutComponent,
    HelpComponent,
    BooksDetailsComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    StudentComponent,
    AddStudentsComponent,
    StudentListByAdminComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule ,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      //{ path: 'books-add', component: AddBooksComponent, canActivate: [UserService] },
      { path: 'books-add', component: AddBooksComponent },
      { path: 'books-list', component: BooksListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'help', component: HelpComponent },
      { path: 'books-details', component: BooksDetailsComponent },
      { path: '', component: LoginComponent },
      { path: '#', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'admin', component: AdminComponent},
      { path: 'student', component: StudentComponent},
      { path: 'admin-panel', component: AdminPanelComponent},
      { path: 'add-student', component: AddStudentsComponent},
      { path: 'student-list-by-admin', component: StudentListByAdminComponent},

    ])
  ],
  providers: [
    BooksService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
