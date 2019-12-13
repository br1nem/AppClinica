import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { MatDialog } from '@angular/material';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})


export class EmployeeHomeComponent implements OnInit {


  employeeForm = this.fb.group(
    {
      EMPLOYEE_NAME: ['', [Validators.required]],
      CATEGORY_ID: ['', [Validators.required]],
      EMPLOYEE_START_DATE: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );


  categories: ['Médico de Familia', 'Prueba'];
  constructor(public apiService: ApiService, private fb: FormBuilder, public dialog: MatDialog) { }

  arrEmployee: Employee[] = [];
  displayedColumns: string[] = ['ID', 'name', 'category', 'date', 'action'];

  ngOnInit() {
    this.getEmployees();
    //this.getCategories();
  }

  createEmployee() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.apiService.createEmployee(this.employeeForm.value).subscribe((res) => {
      });
    }

  }
  public getEmployees() {
    this.apiService.getEmployees().subscribe((res) => {
      this.arrEmployee = res['data'];
      console.log(this.arrEmployee);
    });
  }

  // public getCategories(){
  //   this.apiService.getCategories().subscribe((res) => {
  //     this.categories = res['data'];
  //     console.log(this.categories);
  //   });
  // }


  public deleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe(res => {
    });
  }

  public openDialog(rowData): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      width: '250px',
      data: rowData
    });
  }
}
