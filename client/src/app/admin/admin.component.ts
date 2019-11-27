import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin_email: 'shweta.hatwar6@gmail.com';
  admin_password: 'shweta';

  constructor( private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/books-list']);
  }

  onAdmin() {
    this.userService
      .signin(this.admin_email, this.admin_password)
      .subscribe(response => {
        const result = response.json();
        if (result.status === 'error') {
          alert('invalid admin_email or admin_password');
        } else {
          console.log('In admin login sucess');
          //sessionStorage['admin_status'] = '0';
          this.router.navigate(['/books-add']);
        }
      });
    }

    onRegister(){
      //alert(this.name);
      this.router.navigate(['/signup']);
    }
    // onSignup(){
    //   alert(this.name + this.lastName + this.phone + this.email + this.password );
    //   this.userService
    //   .signup(this.name, this.lastName, this.phone, this.email, this.password)
    //   .subscribe(response =>{
    //     const result = response.json();
    //     if(result.status == 'error'){
    //       alert('invalid data');
    //     } else {
    //       sessionStorage['signup_status'] = '1';
    //       alert('welcome to login');
    //       this.router.navigate(['/login']);

    //     }

    //   });
    // }
}



