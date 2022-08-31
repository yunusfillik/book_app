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

  public bookList: BookDTO[] = [];
  constructor(private http: HttpClient) { }

  getList(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(environment.apiUrl);
  }

  add(book: BookDTO): Observable<BookDTO> {
    return this.http.post<BookDTO>(environment.apiUrl, book);
  }

  update(book: BookDTO): Observable<BookDTO> {
    return this.http.put<BookDTO>(environment.apiUrl + `/${book.id}`, book);
  }

  delete(id: string): Observable<BookDTO> {
    return this.http.delete<BookDTO>(environment.apiUrl + `/${id}`);
  }
}
