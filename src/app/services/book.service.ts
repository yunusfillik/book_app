import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BookDTO {
  public author: string;
  public country: string;
  public imageLink: string;
  public language: string;
  public link: string;
  public title: string;
  public pages: number;
  public year: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public apiUrl = 'assets/db.json'
  constructor(private http: HttpClient) { }

  getBookList(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(this.apiUrl);
  }
}
