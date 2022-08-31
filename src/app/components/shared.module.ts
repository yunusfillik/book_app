import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { DxoEditingModule } from 'devextreme-angular/ui/nested';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [  
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxoEditingModule
  ],
  exports: [
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxoEditingModule,
    HeaderComponent
  ]
})
export class SharedModule { }
