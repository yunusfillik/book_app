import { TestBed } from '@angular/core/testing';

import { BookDTO, BookService } from './book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('BookService', () => {
  let bookService: BookService;
  let httpTestingController: HttpTestingController;
  let testUrl: string = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    bookService = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(bookService).toBeTruthy();
  });

  it(`getList books as an Observable`, () => {
    const bookList: BookDTO[] = [];
    bookService.getList().subscribe({next: res =>{
      expect(res).toEqual(bookList);
    }})
    const request = httpTestingController.expectOne(testUrl);
    expect(request.request.method).toBe("GET");
    request.flush(bookList);
    httpTestingController.verify();
  });

  it(`delete book from the books as an Observable`, () => {
    const id: string = '1';
    bookService.delete(id).subscribe({next: res =>{
      expect(res).toEqual(null);
    }})
    const request = httpTestingController.expectOne(testUrl + '/' + id);
    expect(request.request.method).toBe("DELETE");
    request.flush(null);
  })

  it(`add book into the books as an Observable`, () => {
    const book: BookDTO = new BookDTO();
    bookService.add(book).subscribe({next: res =>{
      expect(res).toEqual(book);
    }})
    const request = httpTestingController.expectOne(testUrl);
    expect(request.request.method).toBe("POST");
    request.flush(book);
  })

  it(`update book into the books as an Observable`, () => {
    const id: string = '1';
    const book: BookDTO = new BookDTO();
    book.id = id;
    bookService.update(book).subscribe({next: res =>{
      expect(res).toEqual(book);
    }})
    const request = httpTestingController.expectOne(testUrl + '/' + id);
    expect(request.request.method).toBe("PUT");
    request.flush(book);
  })  
});
