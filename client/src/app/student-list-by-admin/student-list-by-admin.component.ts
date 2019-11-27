import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list-by-admin',
  templateUrl: './student-list-by-admin.component.html',
  styleUrls: ['./student-list-by-admin.component.css']
})
export class StudentListByAdminComponent implements OnInit {
 
  studentsList = [];

  // dependancy injection
  constructor(
    private router: Router,
    private userService: UserService) {

      this.getStudentListDisplayedToAdmin();
  }

  getStudentListDisplayedToAdmin() {
    this.userService
      .getStudentsListByAdmin()
      .subscribe(response => {
        const result = response.json();
        this.studentsList = result.data;
      });
  }

  ngOnInit() {
  }

}
