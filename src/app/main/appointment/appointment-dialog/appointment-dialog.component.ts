import { Component, OnInit, Inject, Optional, ɵConsole } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AppointmentDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data, public apiService: ApiService) { }

  appointmentForm = this.fb.group({
    APPOINTMENT_ID: [ {value: null, disabled: 'true'}, [Validators.required]],
    EMPLOYEE_ID: [null, [Validators.required]],
    PATIENT_ID: [null, [Validators.required]],
    APPOINTMENT_DATE: ['', [Validators.required]],
  },
  { updateOn: 'blur' }
  );

  maximo: number;
  employees: [];
  patients: [];

  ngOnInit() {
    this.getMax();
    this.getEmployees();
    this.getPatients();
    this.appointmentForm.setValue({
      APPOINTMENT_ID: this.data.APPOINTMENT_ID,
      EMPLOYEE_ID: this.data.EMPLOYEE_ID,
      PATIENT_ID: this.data.PATIENT_ID,
      APPOINTMENT_DATE: this.data.date || '',
    });

  }

  public createAppointment() {
    if (this.appointmentForm.valid) {
      /*console.log(this.appointmentForm.value.APPOINTMENT_DATE);
      const aux = (this.appointmentForm.value.APPOINTMENT_DATE).concat(':00Z');
      this.appointmentForm.value.APPOINTMENT_DATE = aux;*/
      console.log(this.appointmentForm.value.APPOINTMENT_DATE);
      this.apiService.createAppointment(this.appointmentForm.value).subscribe();
    }
    this.dialogRef.close(this.appointmentForm.value);
  }

  public getMax() {
    this.apiService.getMaxAppoinment().subscribe((res) => {
      console.log(res);
      const appointments = res['data'];
      this.maximo = appointments[0].MAXIMO + 1;
    });
  }


  public getEmployees() {
    this.apiService.getEmployees().subscribe((res) => {
      this.employees = res['data'];
      console.log(this.employees);
    });
  }

  public getPatients() {
    this.apiService.getAllPatientList().subscribe((res) => {
      this.patients = res['data'];
      console.log(this.patients);
    });
  }
}
