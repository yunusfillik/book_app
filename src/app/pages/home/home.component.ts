import { Component, OnInit } from '@angular/core';
import { BookDTO, BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public bookService: BookService) {

  }

  ngOnInit(): void {
  }

  contentReady(e) {
    
  }

  onRowRemoved(e) {
    this.bookService.delete(e.data.id).subscribe(res=>{
      if(res?.id){
        console.log('Successfull');
      } else {
        console.log('Error');
      }
    })
  }

  onRowUpdated(e) {
    let book = new BookDTO();
    book.id = e.data.id;
    book.author = e.data.author;
    book.title = e.data.title;
    book.pages = e.data.pages;
    book.year = e.data.year;
    this.bookService.update(book).subscribe(res=>{
      if(res?.id){
        console.log('Successfull');
      } else {
        console.log('Error');
      }
    })
  }

  onRowInserted(e) {
    let book = new BookDTO();
    book.author = e.data.author;
    book.title = e.data.title;
    book.pages = e.data.pages;
    book.year = e.data.year;
    this.bookService.add(book).subscribe(res=>{
      if(res?.id){
        console.log('Successfull');
      } else {
        console.log('Error');
      }
    })
  }
}
