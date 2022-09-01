import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class RentedBookDTO {
  public id: string;
  public bookId: string;
  public startDate: string;
  public endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class RentBookService {

  public apiUrl: string = environment.apiUrl + '/rented_books';
  public sharedBookList: RentedBookDTO[] = [];
  constructor(private http: HttpClient) {
    this.getList().subscribe(res => {
      this.sharedBookList = res;
    });
  }

  getList(): Observable<RentedBookDTO[]> {
    return this.http.get<RentedBookDTO[]>(this.apiUrl);
  }

  add(book: RentedBookDTO): Observable<RentedBookDTO> {
    return this.http.post<RentedBookDTO>(this.apiUrl, book);
  }

  update(book: RentedBookDTO): Observable<RentedBookDTO> {
    return this.http.put<RentedBookDTO>(this.apiUrl + `/${book.id}`, book);
  }

  delete(id: string): Observable<RentedBookDTO> {
    return this.http.delete<RentedBookDTO>(this.apiUrl + `/${id}`);
  }
}
