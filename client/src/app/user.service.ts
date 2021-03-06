import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class UserService implements CanActivate {

  url = 'http://localhost:3000/Library';

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
  }

  signup() {

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
}
