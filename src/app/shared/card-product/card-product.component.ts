import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

defaultUrl = 'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg';

@Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
