import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ApiService } from 'src/app/api.service';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-appointment-home',
  templateUrl: './appointment-home.component.html',
  styleUrls: ['./appointment-home.component.css']
})
export class AppointmentHomeComponent implements OnInit {

  calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarEvents = [{}];

  constructor(public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAppointments();
  }

  public getAppointments() {
    this.apiService.getCompleteAppoinments().subscribe((res) => {
    const appointments = res['data'];
    let i: number;
    for (i = 0; i < appointments.length; i++) {
      this.calendarEvents = this.calendarEvents.concat(
        {title: (appointments[i].CATEGORY_NAME).concat(' ' + appointments[i].CATEGORY_ROOM +
          ': ' + appointments[i].PATIENT_NAME), date: appointments[i].APPOINTMENT_DATE}
      );
    }
  });
  }

  handleDateClick(arg) {
    console.log(arg);
    this.openDialog(arg);

  }

  public openDialog(arg): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '300px',
      data: arg
    });
    dialogRef.afterClosed().subscribe(result => {
      this.calendarEvents = [{}];
      this.getAppointments();
    });
  }
}
