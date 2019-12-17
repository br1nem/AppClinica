import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

@Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
