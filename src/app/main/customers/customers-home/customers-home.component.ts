import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Patient } from '../../../patients';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.css']
})
export class CustomersHomeComponent implements OnInit {

  patientForm = this.fb.group(
    {
      // PATIENT_ID: ['', [Validators.required]],
      PATIENT_NAME: ['', [Validators.required]],
      PATIENT_SURNAME: ['', [Validators.required]],
      PATIENT_PHONE: ['', [Validators.required]],

    },
    { updateOn: 'blur' }
  );

  constructor(public apiService: ApiService, private fb: FormBuilder) { }

  arrPatients: Patient[] = [];
  displayedColumns: string[] = ['ID', 'name', 'surname', 'phone'];

  ngOnInit() {
    this.getPatients();
  }
  createPat() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      this.apiService.createPatient(this.patientForm.value).subscribe((res) => {
      });
    }

  }
  public getPatients() {
    this.apiService.getAllPatientList().subscribe((res) => {
      this.arrPatients = res["data"];
      console.log(this.arrPatients);
    });
  }
}
