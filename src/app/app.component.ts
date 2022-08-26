import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book_app';

  constructor() {
  }


}
