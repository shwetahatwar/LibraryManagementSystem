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

  addBooks(id: string, bookname: string, price: string, category: string, Author: string, email: string, password: string) {

      const body = {
        id: id,
       bookname: bookname,
	price: price,
	category: category,
	Author: Author, 
        email: email ,
        password: password

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



