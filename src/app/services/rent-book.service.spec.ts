import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RentBookService, RentedBookDTO } from './rent-book.service';

describe('RentBookService', () => {
  let rentBookService: RentBookService;
  let httpTestingController: HttpTestingController;
  let testUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    rentBookService = TestBed.inject(RentBookService);
    httpTestingController = TestBed.inject(HttpTestingController);
    testUrl = rentBookService.apiUrl;
  });

  it('should be created', () => {
    expect(rentBookService).toBeTruthy();
  });

  it(`getList books as an Observable`, () => {
    const bookList: RentedBookDTO[] = [];
    rentBookService.getList().subscribe({next: res =>{
      expect(res).toEqual(bookList);
    }});
    //Have 2 request **POST and **GET
    const requests = httpTestingController.match(testUrl);
    requests[0].flush(bookList);
    requests[1].flush(bookList);
    httpTestingController.verify();
  });

  it(`add book into the books as an Observable`, () => {
    const book: RentedBookDTO = new RentedBookDTO();
    rentBookService.add(book).subscribe({next: res =>{
      expect(res).toEqual(book);
    }});   
    //Have 2 request **POST and **GET 
    const requests = httpTestingController.match(testUrl);
    requests[0].flush(book);
    requests[1].flush(book);
  })

  it(`update book into the books as an Observable`, () => {
    const id: string = '1';
    const book: RentedBookDTO = new RentedBookDTO();
    book.id = id;
    rentBookService.update(book).subscribe({next: res =>{
      expect(res).toEqual(book);
    }})
    const request = httpTestingController.expectOne(testUrl + '/' + id);
    expect(request.request.method).toBe("PUT");
    request.flush(book);
  })  

  it(`delete book from the books as an Observable`, () => {
    const id: string = '1';
    rentBookService.delete(id).subscribe({next: res =>{
      expect(res).toEqual(null);
    }})
    const request = httpTestingController.expectOne(testUrl + '/' + id);
    expect(request.request.method).toBe("DELETE");
    request.flush(null);
  })
});
