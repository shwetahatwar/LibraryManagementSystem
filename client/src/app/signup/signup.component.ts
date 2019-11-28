import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
      this.router.navigate(['/admin']);
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
      // alert(this.name + this.lastName + this.phone + this.email + this.password );
      this.userService
      .signup(this.name, this.lastName, this.phone, this.email, this.password)
      .subscribe(response => {
      //  alert(this.onSignup);
        const result = response.json();
       // alert(result.status);
        if(result.status == 'error'){
     //     alert('invalid data')
         // alert('welcome to signup');
          ;
        } else {
          sessionStorage['signup_status'] = '1';
         // alert('welcome to signup');
          this.router.navigate(['/admin']);
         }
      });
    }

}
