import { Component, OnInit } from '@angular/core';
import { RentBookService, RentedBookDTO } from 'src/app/services/rent-book.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {

  public dailyDeliveryList: RentedBookDTO[] = [];
  constructor(public rentBookService: RentBookService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    let today = new Date();
    let year = today.getFullYear();
    let mounth = today.getMonth();
    let day = today.getDate();
    this.dailyDeliveryList = this.rentBookService.rentedBookList.filter(x => {
      let date = new Date(x.endDate);
      return (year == date.getFullYear() && mounth == date.getMonth() && day == date.getDate())
    })
  }
}
