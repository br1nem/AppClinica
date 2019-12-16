import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-appointment-home',
  templateUrl: './appointment-home.component.html',
  styleUrls: ['./appointment-home.component.css']
})
export class AppointmentHomeComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];
  calendarEvents = [{}];

  constructor(public apiService: ApiService) { }

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
    console.log(appointments);
  });
  }



}
