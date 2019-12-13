import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Patient } from 'src/app/patients';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-customers-dialog',
  templateUrl: './customers-dialog.component.html',
  styleUrls: ['./customers-dialog.component.css']
})
export class CustomersDialogComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CustomersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public apiService: ApiService) { }

  patientForm = this.fb.group(
    {
      PATIENT_ID:[null,[Validators.required]],
      PATIENT_NAME: ['', [Validators.required]],
      PATIENT_SURNAME: ['', [Validators.required]],
      PATIENT_PHONE: ['', [Validators.required]],

    },
    { updateOn: 'blur' }
  );

  ngOnInit() {
    console.log(this.data);
    this.patientForm.setValue({
      PATIENT_ID: this.data.PATIENT_ID,
      PATIENT_NAME: this.data.PATIENT_NAME || '',
      PATIENT_SURNAME: this.data.PATIENT_SURNAME || '',
      PATIENT_PHONE: this.data.PATIENT_PHONE || '',
    });
  }

  public updatePat() {
    this.apiService.updatePatient(this.patientForm.value).subscribe();
  }


}
