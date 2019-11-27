import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name = '';
  lastName = '';
  phone = '';
  email = '';
  password = '';

  constructor( private router: Router,
    private userService: UserService) { }

    ngOnInit() {
    }
    onCancel() {
      this.router.navigate(['/books-list']);
    }

    onAddUser() {
      this.userService
        .signup(this.name, this.lastName, this.phone, this.email, this.password)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/books-list']);
        });
    }

    onSignup(){
      //alert(this.onSignup);
      alert(this.name + this.lastName + this.phone + this.email + this.password );
      this.userService
      .studentSignup(this.name, this.lastName, this.phone, this.email, this.password)
      .subscribe(response => {
        console.log(response)
      });
    }

}
