import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsServicesRoutingModule } from './products-services-routing.module';
import { ProductsServicesMainComponent } from './products-services-main/products-services-main.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductsServicesMainComponent],
  imports: [
    CommonModule,
    ProductsServicesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ProductsServicesModule { }
