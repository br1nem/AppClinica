import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  serviceForm = this.fb.group(
    {
      SERVICE_ID: [ null, [Validators.required]],
      SERVICE_NAME: ['', [Validators.required]],
      SERVICE_PRICE: [ null, [Validators.required]]
    },
    { updateOn: 'blur' }
  );

  constructor( private route: ActivatedRoute, private apiService: ApiService, public fb: FormBuilder) { }

  id: number;
  service: Service;


  ngOnInit() {
    const strId = this.route.snapshot.params['SERVICE_ID'];
    this.id = Number(strId);
    this.getService();
  }


  getService() {
    this.apiService.getServiceById(this.id).subscribe( res => {
      this.service = res['data'][0];
      this.setForm();
    });
  }

  setForm() {
    this.serviceForm.setValue({
      PRODUCT_ID: this.service.SERVICE_ID,
      PRODUCT_NAME: this.service.SERVICE_NAME || '',
      PRODUCT_PRICE: this.service.SERVICE_PRICE
    });
  }

  updateService() {

  }

}
