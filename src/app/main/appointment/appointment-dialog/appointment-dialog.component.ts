import { Component, OnInit, Inject, Optional } from '@angular/core';
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
    APPOINTMENT_ID: [ null, [Validators.required]],
    EMPLOYEE_ID: [null, [Validators.required]],
    PATIENT_ID: [null, [Validators.required]],
    APPOINTMENT_DATE: ['', [Validators.required]],
  },
  { updateOn: 'blur' }
  );


  ngOnInit() {
    console.log("data");
    console.log(this.data);
    this.appointmentForm.setValue({
      APPOINTMENT_ID: this.data.APPOINTMENT_ID,
      EMPLOYEE_ID: this.data.EMPLOYEE_ID,
      PATIENT_ID: this.data.PATIENT_ID,
      APPOINTMENT_DATE: this.data.date || '',
    });

  }

  public createAppointment() {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value.APPOINTMENT_DATE);
      const aux = (this.appointmentForm.value.APPOINTMENT_DATE).concat(':00Z');
      this.appointmentForm.value.APPOINTMENT_DATE = aux;
      console.log(this.appointmentForm.value.APPOINTMENT_DATE);
      this.apiService.createAppointment(this.appointmentForm.value).subscribe();
    }
    this.dialogRef.close(this.appointmentForm.value);
  }

}
