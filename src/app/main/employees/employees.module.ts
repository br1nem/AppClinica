import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatTooltipModule, MatButtonModule, MatInputModule, MatDialogModule, MatSelect, MatSelectModule, MatOptionModule } from '@angular/material';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';


@NgModule({
  declarations: [
    EmployeeHomeComponent,
    EmployeeDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    EmployeesRoutingModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule
  ],
  entryComponents: [
    EmployeeDialogComponent
  ]
})
export class EmployeesModule { }
