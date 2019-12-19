import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-card-servict',
  templateUrl: './card-servict.component.html',
  styleUrls: ['./card-servict.component.css']
})
export class CardServictComponent implements OnInit {
  @Input() service: Service;

  defaultUrl = 'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg';

  constructor() { }

  ngOnInit() {
  }

}
