import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatTooltipModule, MatButtonModule, MatInputModule, MatDialogModule, MatSelect, MatSelectModule,
   MatOptionModule, MatToolbarModule } from '@angular/material';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';


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
    MatOptionModule,
    MatToolbarModule,
    SharedModule
  ],
  entryComponents: [
    EmployeeDialogComponent
  ]
})
export class EmployeesModule { }
