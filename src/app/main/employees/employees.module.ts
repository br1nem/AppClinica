import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeHomeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
@Injectable()
export class EmployeesModule {
  constructor(private http: HttpClient) { }
 }
