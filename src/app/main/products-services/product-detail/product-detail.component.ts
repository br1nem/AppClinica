import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  defaultUrl = 'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg';

  productForm = this.fb.group(
    {
      PRODUCT_ID: [null, [Validators.required]],
      PRODUCT_NAME: ['', [Validators.required]],
      SUPPLIER_ID: [null, [Validators.required]],
      CATEGORY_PRODUCT_ID: [null, [Validators.required]],
      PRODUCT_STOCK: [null, [Validators.required]],
      PRODUCT_PRICE: [null, [Validators.required]],
      PRODUCT_PHOTO: []
    },
    { updateOn: 'blur' }
  );

  constructor(private route: ActivatedRoute, private apiService: ApiService,
              public fb: FormBuilder, private cd: ChangeDetectorRef) { }

  id: number;
  product: Product;


  ngOnInit() {
    const strId = this.route.snapshot.params['PRODUCT_ID'];
    this.id = Number(strId);
    this.getProduct();
  }


  getProduct() {
    this.apiService.getProductById(this.id).subscribe(res => {
      this.product = res['data'][0];
      console.log(res['data'][0]);
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
      PRODUCT_PRICE: this.product.PRODUCT_PRICE,
      PRODUCT_PHOTO: this.product.PRODUCT_PHOTO
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.productForm.patchValue({
          PRODUCT_PHOTO: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  updateProduct() {
      console.log('Aqui', this.productForm.getRawValue());
      this.apiService.updateProduct(this.productForm.getRawValue()).subscribe(res => {
        console.log('bien modificado');
      });
  }

}
