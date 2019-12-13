import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatTooltipModule, MatInputModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { CustomersDialogComponent } from './customers-dialog/customers-dialog.component';



@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersDialogComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    CustomersDialogComponent
  ]
})
export class CustomersModule { }
