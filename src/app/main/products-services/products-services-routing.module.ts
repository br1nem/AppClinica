import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsServicesMainComponent} from '../products-services/products-services-main/products-services-main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {path: '', component: ProductsServicesMainComponent},
  {path: 'product/:PRODUCT_ID', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsServicesRoutingModule { }
