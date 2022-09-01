import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'delivery-list', loadChildren: () => import('./pages/delivery-list/delivery-list.module').then(m => m.DeliveryListModule) },
  { path: 'rent-book', loadChildren: () => import('./pages/rent-book/rent-book.module').then(m => m.RentBookModule) },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
