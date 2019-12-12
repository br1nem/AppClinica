import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [
    CustomersHomeComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule

  ]
})
export class CustomersModule { }
