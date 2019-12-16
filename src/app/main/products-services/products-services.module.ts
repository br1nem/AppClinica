import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsServicesRoutingModule } from './products-services-routing.module';
import { ProductsServicesMainComponent } from './products-services-main/products-services-main.component';
import { MatToolbarModule, MatButtonModule, MatTableModule } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductsServicesMainComponent],
  imports: [
    CommonModule,
    ProductsServicesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class ProductsServicesModule { }
