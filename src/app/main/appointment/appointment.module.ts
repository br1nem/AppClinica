import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [
    AppointmentHomeComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FullCalendarModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class AppointmentModule { }

