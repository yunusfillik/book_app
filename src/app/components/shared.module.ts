import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import { DxoEditingModule } from 'devextreme-angular/ui/nested';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [  
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxoEditingModule,
    DxSelectBoxModule,
    DxDateBoxModule
  ],
  exports: [
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxoEditingModule,
    HeaderComponent,
    DxSelectBoxModule,
    DxDateBoxModule
  ]
})
export class SharedModule { }
