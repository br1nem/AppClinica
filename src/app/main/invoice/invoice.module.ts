import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceHomeComponent } from './invoice-home/invoice-home.component';
import { MatToolbarModule, MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    InvoiceHomeComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class InvoiceModule { }
