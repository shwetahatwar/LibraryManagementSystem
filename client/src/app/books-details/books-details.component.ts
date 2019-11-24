
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  selectedBooks = {};

  constructor(
    private booksService: BooksService,
    private activedRoute: ActivatedRoute) {

    this.activedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      //console.log(`selected books id: ${id}`);
      this.booksService
        .getBooksDetails(id)
        .subscribe(response => {
          const result = response.json();
          this.selectedBooks = result.data;
        });
    });
  }

  ngOnInit() {
  }

}
