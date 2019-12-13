import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})


export class EmployeeHomeComponent implements OnInit {


  employeeForm = this.fb.group(
    {
      // PATIENT_ID: ['', [Validators.required]],
      EMPLOYEE_NAME: ['', [Validators.required]],
      CATEGORY_ID: ['', [Validators.required]],
      EMPLOYEE_START_DATE: ['', [Validators.required]],

    },
    { updateOn: 'blur' }
  );

  constructor(public apiService: ApiService, private fb: FormBuilder) { }

  arrEmployee: Employee[] = [];
  displayedColumns: string[] = ['ID', 'name', 'category', 'date'];

  ngOnInit() {
    this.getEmployees();
  }

  createPat() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.apiService.createEmployee(this.employeeForm.value).subscribe((res) => {
      });
    }

  }
  public getEmployees() {
    this.apiService.getEmployees().subscribe((res) => {
      this.arrEmployee = res["data"];
      console.log(this.arrEmployee);
    });
  }
}
