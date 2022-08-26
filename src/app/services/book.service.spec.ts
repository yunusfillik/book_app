import { TestBed, waitForAsync, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch books as an Observable`, waitForAsync(inject([HttpTestingController, BookService],
    (httpClient: HttpTestingController, bookService: BookService) => {
      const bookList = [
        {
          "author": "Chinua Achebe",
          "country": "Nigeria",
          "imageLink": "images/things-fall-apart.jpg",
          "language": "English",
          "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          "pages": 209,
          "title": "Things Fall Apart",
          "year": 1958
        },
        {
          "author": "Hans Christian Andersen",
          "country": "Denmark",
          "imageLink": "images/fairy-tales.jpg",
          "language": "Danish",
          "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
          "pages": 784,
          "title": "Fairy tales",
          "year": 1836
        },
        {
          "author": "Dante Alighieri",
          "country": "Italy",
          "imageLink": "images/the-divine-comedy.jpg",
          "language": "Italian",
          "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
          "pages": 928,
          "title": "The Divine Comedy",
          "year": 1315
        }
      ];
      bookService.getBookList().subscribe(res => {
        expect(res.length).toBe(3);
      });
      let request = httpTestingController.expectOne(bookService.apiUrl);
      expect(request.request.method).toBe("GET");
      request.flush(bookList);
      httpTestingController.verify();
    })))
});
