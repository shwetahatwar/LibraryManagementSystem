import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class BooksService {

  url = 'http://localhost:3000/Library';

  constructor(private http: Http) {

  }

  getBooks() {
    return this.http.get(this.url);
  }

  getBooksDetails(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  addBooks(bookname: string, price: string, Author: string) {

    const body = {
      bookname: bookname,
      price: price,
      Author: Author,
    };

    const header = new Headers({ 'Content-Type': 'application/json' });
    const requestOption = new RequestOptions({ headers: header });

    return this.http.post(this.url, body, requestOption);
  }

  updateBooks() {

  }

  deleteBooks(id: number) {
    console.log('Inside dlt service', id);
    return this.http.delete(this.url + '/' + id);
  }

}



