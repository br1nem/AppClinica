import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsServicesRoutingModule } from './products-services-routing.module';
import { ProductsServicesMainComponent } from './products-services-main/products-services-main.component';
<<<<<<< HEAD
import { MatToolbarModule, MatButtonModule, MatTableModule } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
=======
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
>>>>>>> 9c6dac128bd658fbcd039fd0d4ad1a832db37b02


@NgModule({
  declarations: [ProductsServicesMainComponent],
  imports: [
    CommonModule,
    ProductsServicesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatTableModule
=======
    SharedModule
>>>>>>> 9c6dac128bd658fbcd039fd0d4ad1a832db37b02
  ]
})
export class ProductsServicesModule { }
