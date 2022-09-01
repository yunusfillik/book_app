import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activeRoute: string = '/';
  constructor(private router: Router) {
    router.events.subscribe((res)=>{
      this.activeRoute = router.url;
    })
   }

  ngOnInit(): void {
  }

}
