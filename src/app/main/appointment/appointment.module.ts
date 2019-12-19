import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppointmentHomeComponent,
    AppointmentDialogComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    SharedModule
  ],
  entryComponents: [
    AppointmentDialogComponent
  ]
})
export class AppointmentModule { }

