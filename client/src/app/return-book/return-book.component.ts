import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  Bookname: '';
  books = [];
  constructor(private router: Router, private userService: UserService,
    private booksService: BooksService) { }

  ngOnInit() {
    this.refreshBooksList();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['books']) {
      console.log('books::', this.books);
    }
  }

  onSubmit(){
this.router.navigate(['/books-list']);
  }

  onCancel(){
    this.router.navigate(['/books-list']);
  }
  refreshBooksList() {
    this.booksService
      .getBooks()
      .subscribe(response => {
        const result = response.json();
       //alert(result.data);
        this.books = result.data;
        console.log('books::', this.books);
      });

  }
}
