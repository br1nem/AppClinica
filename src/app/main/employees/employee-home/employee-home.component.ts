import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})


export class EmployeeHomeComponent implements OnInit {


  constructor(private apiService: ApiService) {
    console.log('constructor');
  }
  ngOnInit() {
  }

  public leerEmployees() {
    console.log('hi');
    const employee = {
      EMPLOYEE_ID: 66,
      EMPLOYEE_NAME: 'Bruno',
      CATEGORY_ID: 1,
      EMPLOYEE_START_DATE: '2019-12-10',
    };

    this.apiService.createEmployee(employee).subscribe((res) => {
      console.log('Update a customer');
});
  }
}
