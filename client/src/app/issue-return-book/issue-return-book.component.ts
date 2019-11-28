import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-issue-return-book',
  templateUrl: './issue-return-book.component.html',
  styleUrls: ['./issue-return-book.component.css']
})
export class IssueReturnBookComponent implements OnInit {
  Bookname: '';
  searchbook: '';

  constructor(router: Router,
    userservice: UserService) { }

  ngOnInit() {
  }

  onSubmit(){

  }
  onCancel(){

  }
  //*************************** */

  

}
