import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class BookDTO {
  public id: string;
  public title: string;
  public author: string;
  public year: string;
  public pages: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public apiUrl: string = environment.apiUrl + '/books';
  public bookList: BookDTO[] = [];
  constructor(private http: HttpClient) {
    this.getList().subscribe(res => {
      this.bookList = res;
    });
  }

  getList(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(this.apiUrl);
  }

  add(book: BookDTO): Observable<BookDTO> {
    return this.http.post<BookDTO>(this.apiUrl, book);
  }

  update(book: BookDTO): Observable<BookDTO> {
    return this.http.put<BookDTO>(this.apiUrl + `/${book.id}`, book);
  }

  delete(id: string): Observable<BookDTO> {
    return this.http.delete<BookDTO>(this.apiUrl + `/${id}`);
  }
}
