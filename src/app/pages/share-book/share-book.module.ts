import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareBookRoutingModule } from './share-book-routing.module';
import { ShareBookComponent } from './share-book.component';
import { SharedModule } from 'src/app/components/shared.module';


@NgModule({
  declarations: [
    ShareBookComponent
  ],
  imports: [
    CommonModule,
    ShareBookRoutingModule,
    SharedModule
  ]
})
export class ShareBookModule { }
