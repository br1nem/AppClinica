import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-card-servict',
  templateUrl: './card-servict.component.html',
  styleUrls: ['./card-servict.component.css']
})
export class CardServictComponent implements OnInit {
  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}
