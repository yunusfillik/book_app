import { Component, OnInit } from '@angular/core';
import { BookDTO, BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public bookList: BookDTO[] = [];
  constructor(public bookService: BookService) {

  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe(res => {
      this.bookList = res;
    });
  }

}
