import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/products';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productForm = this.fb.group(
    {
      PRODUCT_ID: [ null, [Validators.required]],
      PRODUCT_NAME: ['', [Validators.required]],
      SUPPLIER_ID: [ null, [Validators.required]],
      CATEGORY_PRODUCT_ID: [null , [Validators.required]],
      PRODUCT_STOCK: [null , [Validators.required]],
      PRODUCT_PRICE: [ null, [Validators.required]]
    },
    { updateOn: 'blur' }
  );

  constructor( private route: ActivatedRoute, private apiService: ApiService, public fb: FormBuilder) { }

  id: number;
  product: Product;


  ngOnInit() {
    const strId = this.route.snapshot.params['PRODUCT_ID'];
    this.id = Number(strId);
    this.getProduct();
  }


  getProduct() {
    this.apiService.getProductById(this.id).subscribe( res => {
      this.product = res['data'][0];
      this.setForm();
    });
  }

  setForm() {
    this.productForm.setValue({
      PRODUCT_ID: this.product.PRODUCT_ID,
      PRODUCT_NAME: this.product.PRODUCT_NAME || '',
      SUPPLIER_ID: this.product.SUPPLIER_ID,
      CATEGORY_PRODUCT_ID: this.product.CATEGORY_PRODUCT_ID,
      PRODUCT_STOCK: this.product.PRODUCT_STOCK,
      PRODUCT_PRICE: this.product.PRODUCT_PRICE
    });
  }

  updateProduct() {

  }

}
