//import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books = [];

  // dependancy injection
  constructor(
    private router: Router,
    private booksService: BooksService) {

      this.refreshBooksList();
  }

  refreshBooksList() {
    this.booksService
      .getBooks()
      .subscribe(response => {
        const result = response.json();
       //alert(result.data);
        this.books = result.data;
      });
  }

  ngOnInit() {
  }

  onDetails(books) {
    this.router.navigate(['/books-details'], { queryParams: { id: books.id } });
  }

  onDelete(books) {
     const answer = confirm('Are you sure you want to delete ' +  books.id + ' ?');
    if (answer) {
      console.log('inside delete', books.id);
      this.booksService
        .deleteBooks(books.id)
        .subscribe(response => {
          const result = response.json();
          console.log(result);
          this.refreshBooksList();
        });
    }
  }

}
