import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'share-book', loadChildren: () => import('./pages/share-book/share-book.module').then(m => m.ShareBookModule) },
  { path: 'delivery-list', loadChildren: () => import('./pages/delivery-list/delivery-list.module').then(m => m.DeliveryListModule) },
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
