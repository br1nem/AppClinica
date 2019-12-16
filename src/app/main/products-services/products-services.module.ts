import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsServicesRoutingModule } from './products-services-routing.module';
import { ProductsServicesMainComponent } from './products-services-main/products-services-main.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [ProductsServicesMainComponent],
  imports: [
    CommonModule,
    ProductsServicesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FormBuilder
  ]
})
export class ProductsServicesModule { }
