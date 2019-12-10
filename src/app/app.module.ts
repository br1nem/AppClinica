import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FullCalendarModule} from '@fullcalendar/angular';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarGridComponentComponent } from './calendar/calendar-grid-component/calendar-grid-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarGridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
