import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/products';
import { Service } from 'src/app/service';


@Component({
  selector: 'app-products-services-main',
  templateUrl: './products-services-main.component.html',
  styleUrls: ['./products-services-main.component.css']
})
export class ProductsServicesMainComponent implements OnInit {

  productForm = this.ff.group(
    {
      PRODUCT_ID: [null, [Validators.required]],
      PRODUCT_NAME: ['', [Validators.required]],
      SUPPLIER_ID: [null, [Validators.required]],
      CATEGORY_PRODUCT_ID: [null, [Validators.required]],
      PRODUCT_STOCK: [null, [Validators.required]],
      PRODUCT_PRICE: [null, [Validators.required]],
      PRODUCT_PHOTO: [null, [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(public apiService: ApiService, private ff: FormBuilder) { }

  arrProduct: Product[] = [];
  arrService: Service[] = [];


  ngOnInit() {
    this.getProducts();
    this.getServices();
  }

  createProduct() {
    if (this.productForm.valid) {
      this.apiService.createProduct(this.productForm.value).subscribe((res) => {
      });
    }
  }
  public getProducts() {
    this.apiService.getProducts().subscribe((res) => {
      this.arrProduct = res['data'];
      console.log(this.arrProduct);
    });
  }
  public getServices() {
    this.apiService.getServices().subscribe((res) => {
      this.arrService = res['data'];
      console.log(this.arrService);
    });

  }
}
