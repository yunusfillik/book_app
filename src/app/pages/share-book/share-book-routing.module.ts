import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareBookComponent } from './share-book.component';

const routes: Routes = [{ path: '', component: ShareBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareBookRoutingModule { }
