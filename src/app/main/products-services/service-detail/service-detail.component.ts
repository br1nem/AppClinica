import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  defaultUrl = 'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg';

  serviceForm = this.fb.group(
    {
      SERVICE_ID: [ null, [Validators.required]],
      SERVICE_NAME: ['', [Validators.required]],
      SERVICE_PRICE: [ null, [Validators.required]],
      SERVICE_PHOTO: []
    },
    { updateOn: 'blur' }
  );

  constructor( private route: ActivatedRoute, private apiService: ApiService,
               public fb: FormBuilder, private cd: ChangeDetectorRef) { }

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
      console.log(this.service);
      this.setForm();
    });
  }

  setForm() {
    this.serviceForm.setValue({
      SERVICE_ID: this.service.SERVICE_ID,
      SERVICE_NAME: this.service.SERVICE_NAME || '',
      SERVICE_PRICE: this.service.SERVICE_PRICE,
      SERVICE_PHOTO: this.service.SERVICE_PHOTO || ''
    });
  }


  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.serviceForm.patchValue({
          SERVICE_PHOTO: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  updateService() {
    console.log(this.serviceForm.getRawValue());
    this.apiService.updateService(this.serviceForm.getRawValue()).subscribe(
      res => {
        console.log('servicio actualizado');
      }
    );
  }

}
