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
  public minDate: Date = new Date("05/07/1989");
  public maxDate: Date = new Date("12/27/2090");
  public value: Date = new Date("11/27/2019");
  bookname = '';
  price = '';
  Author = '';

  constructor(
    private router: Router,
    private booksService: BooksService) { }

  ngOnInit() {
  }

  onAdd() {
    this.booksService
      .addBooks(this.bookname, this.price, this.Author)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/books-list']);
      });
  }

  onCancel() {
    this.router.navigate(['/books-list']);
  }

}

