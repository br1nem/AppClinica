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
      EMPLOYEE_ID: 23,
      EMPLOYEE_NAME: 'jENNY',
      CATEGORY_ID: 1,
      EMPLOYEE_START_DATE: '2019-12-10',
    };

    this.apiService.getContacts("").subscribe(res => {
     let aux_array = res['data'];
     console.log(aux_array);
     console.log(aux_array[1]);
     console.log(aux_array[1].EMPLOYEE_ID)
    });

  }
}
