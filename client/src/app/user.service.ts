import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
//import { Session } from "inspector";

@Injectable()
export class UserService implements CanActivate {
  url = 'http://localhost:3000';
  adminurl = 'http://localhost:3000/admin';
  studentRegUrl = 'http://localhost:3000/register/signup';

//   session = [
//     {case : '1', sessionStorage, ['login_status']: '1'},
//     {case : '2', sessionStorage,  ['admin_status']: '2'},
//     {case : '3', sessionStorage, ['signup_status']: '3'}
// ];

  constructor(
    private router: Router,
    private http: Http) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['login_status'] == '1') {
      // user has logged in
      return true;
    }

    // navigate to login screen
    this.router.navigate(['/login']);

    return false;

    // switch (Session) {
    //   case 'Session': break;

    // }
  }
  signup(name: string, lastName: string, phone: string, email: string, password: string) {
    const body = {
      name: name,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password
    };
    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});
    return this.http.post(this.adminurl + '/signup', body, requestOption);
  }

  studentSignup(name: string, lastName: string, phone: string, email: string, password: string) {
    const body = {
      name: name,
      lastname: lastName,
      contactNo: phone,
      emailid: email,
      password: password
    };
    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});
    return this.http.post(this.studentRegUrl, body, requestOption);
  }

  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});

    return this.http.post(this.url + '/signin', body, requestOption);
  }

  //student signin

  studentsignin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});

    return this.http.post(this.url + '/studentsignin', body, requestOption);
  }


  admin(admin_email: string, admin_password: string) {
    const body = {
      email: admin_email,
      password: admin_password
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});

    return this.http.post(this.url + '/admin', body, requestOption);
  }

  addStudentByAdmin(rollNo, studentName, mobileNo) {
    const body = {
      rollNo: rollNo,
      studentName: studentName,
      mobileNo: mobileNo
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});

    return this.http.post(this.url + '/add-studentByAdmin', body, requestOption);
  }

  getStudentsListByAdmin() {
    return this.http.get(this.url + '/studentListByAdmin');
  }
}
