import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Patient } from '../../../patients';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CustomersDialogComponent } from '../customers-dialog/customers-dialog.component';

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

  constructor(public apiService: ApiService, private fb: FormBuilder, public dialog: MatDialog) { }

  arrPatients: Patient[] = [];
  displayedColumns: string[] = ['ID', 'name', 'surname', 'phone', 'action'];

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
      this.arrPatients = res['data'];
      console.log(this.arrPatients);
    });
  }

  public deletePatient(id: number) {
    this.apiService.deletePatient(id).subscribe(res => {
    });
  }

  public openDialog(rowData): void {
    const dialogRef = this.dialog.open(CustomersDialogComponent, {
      width: '250px',
      data: rowData
    });
  }
}
