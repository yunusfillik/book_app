import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [    
    
  ],
  imports: [
    CommonModule,
    DxButtonModule
  ],
  exports:[
    DxButtonModule
  ]
})
export class SharedModule { }
