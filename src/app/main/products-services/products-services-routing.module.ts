import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsServicesMainComponent} from '../products-services/products-services-main/products-services-main.component';


const routes: Routes = [
  {path: '', component: ProductsServicesMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsServicesRoutingModule { }
