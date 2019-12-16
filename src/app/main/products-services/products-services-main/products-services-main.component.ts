import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/products';


@Component({
  selector: 'app-products-services-main',
  templateUrl: './products-services-main.component.html',
  styleUrls: ['./products-services-main.component.css']
})
export class ProductsServicesMainComponent implements OnInit {

  productForm = this.fb.group(
    {
      PRODUCT_ID: ['', [Validators.required]],
      PRODUCT_NAME: ['', [Validators.required]],
      SUPPLIER_ID: ['', [Validators.required]],
      CATEGORY_PRODUCT_ID: ['', [Validators.required]],
      PRODUCT_STOCK: ['', [Validators.required]],
      PRODUCT_PRICE: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(public apiService: ApiService, private fb: FormBuilder, ) { }

  arrProduct: Product[] = [];
  displayedColumns: string[] = ['ID', 'name', 'supplier', 'category', 'stock', 'price'];
  ngOnInit() {
  }

createProduct() {
  if (this.productForm.valid) {
    this.apiService.createProduct(this.productForm.value).subscribe((res) => {
    });
  }

}
  }
