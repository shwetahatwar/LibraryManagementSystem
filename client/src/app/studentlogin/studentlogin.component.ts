import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  email : '';
  password : '';

  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['#']);
  }

  onStudent() {
    this.userService
      .studentsignin(this.email, this.password)
      .subscribe(response => {
        const result = response.json();
        if (result.status === 'error') {
          alert('invalid email or password');
        } else {
          console.log('In student login sucess');
          //sessionStorage['admin_status'] = '0';
          this.router.navigate(['/issue-return-book']);
        }
      });
    }

    onRegister(){
      //alert(this.name);
      this.router.navigate(['/student']);
    }

}
