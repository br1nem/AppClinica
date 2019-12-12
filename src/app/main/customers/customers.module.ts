import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { TooltipOverComponent } from './tooltip-over/tooltip-over.component';


@NgModule({
  declarations: [
    CustomersHomeComponent,
    TooltipOverComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule

  ]
})
export class CustomersModule { }
