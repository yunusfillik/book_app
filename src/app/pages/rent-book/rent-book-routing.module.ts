import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentBookComponent } from './rent-book.component';

const routes: Routes = [{ path: '', component: RentBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentBookRoutingModule { }
