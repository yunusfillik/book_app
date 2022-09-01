import { Component, OnInit } from '@angular/core';
import { BookDTO, BookService } from 'src/app/services/book.service';
import { RentBookService, RentedBookDTO } from 'src/app/services/rent-book.service';

@Component({
  selector: 'app-rent-book',
  templateUrl: './rent-book.component.html',
  styleUrls: ['./rent-book.component.scss']
})
export class RentBookComponent implements OnInit {


  public selectedBook: BookDTO;
  public startDate;
  public endDate;
  constructor(public bookService: BookService,
    public rentBookService: RentBookService) {
  }

  ngOnInit(): void {
  }

  onSelectedBookChange() {
    console.log(this.selectedBook)
  }

  submit() {
    console.log(this.selectedBook)
    if (!this.selectedBook?.id || !this.startDate || !this.endDate)
      return console.log('All fields required');
    let request: RentedBookDTO = new RentedBookDTO();
    request.bookId = this.selectedBook.id;
    request.startDate = this.startDate;
    request.endDate = this.endDate;
    this.rentBookService.add(request).subscribe(res => {
      if (res?.id) {
        console.log('Successfull');
        this.selectedBook = null;
        this.startDate = null;
        this.endDate = null;
      } else {
        console.log('Error');
      }
    })
  }

}
