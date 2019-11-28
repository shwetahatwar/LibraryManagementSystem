import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/books-list']);
  }

  onLogin() {
    alert(this.email + this.password);
    this.userService
      .signin(this.email, this.password)
      .subscribe(response => {
        const result = response.json();
        if (result.status == 'error') {
      //    alert('invalid email or password');
        } else {
          sessionStorage['login_status'] = '1';

         // alert('welcome to the application');
          this.router.navigate(['/books-add']);
        }
      });
    }

    onSignup(){
      //alert(this.name);
      this.router.navigate(['/signup']);
    }

  onLoginAsAdmin() {
    this.router.navigate(['/admin']);
  }

  onLoginAsStudent() {
    this.router.navigate(['/studentlogin']);
  }
}
