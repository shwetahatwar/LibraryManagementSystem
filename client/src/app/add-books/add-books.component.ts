// import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  id = '';
  bookname = '';
  price = '';
  category = '';
  Author = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private booksService: BooksService) { }

  ngOnInit() {
  }

  onAdd() {
    this.booksService
      .addBooks(this.id,this.bookname,this.price,this.category,this.Author,this.email,this.password)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/books-list']);
      });
  }

  onCancel() {
    this.router.navigate(['/books-list']);
  }

}

