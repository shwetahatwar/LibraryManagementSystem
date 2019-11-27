import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  rollNo = '';
  studentName = '';
  mobileNo = '';

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  onAddStudentByAdmin() {
    this.userService
      .addStudentByAdmin(this.rollNo, this.studentName, this.mobileNo)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/books-list']);
      });
  }

}
