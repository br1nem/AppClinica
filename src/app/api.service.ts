import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Patient } from './patients';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }
  localUrl = 'http://localhost:8080/clinica-jee/services/rest';

  public firstPage = '';
  public prevPage = '';
  public nextPage = '';
  public lastPage = '';

  // Las letras que están a continuación de bearer se obtuvieron mediante la llamada al login desde el postman
  // deberia obtenerse mediante la llamada desde el servicio login y guardandolo como guardamos el role
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGlvbi10aW1lIjoxNT' +
      'c2MDgwMzQyNDE2LCJ1c2VybmFtZSI6ImRlbW8ifQ.R4t-Sa1FMMwjhqoTq0WvwCreHCSwpHPZlTP0ismkHW8', 'Content-type': 'application/json'
  });

  /** Methods for use backend in frontend */
  public createEmployee(employee: Employee) {
    return this.httpClient.post(`${this.localUrl}/employees/employee`, { data: employee }, { headers: this.headers });
  }

  public updateEmployee(employee: Employee) {
    return this.httpClient.put(`${this.localUrl}/employees/employee`, { filter: { EMPLOYEE_ID: employee.EMPLOYEE_ID }, data: employee },
      { headers: this.headers });
  }

  public deleteEmployee(id: number) {
    const options: any = {
      headers: this.headers,
      body: JSON.stringify({
        filter: { EMPLOYEE_ID: id }
      })
    };

    return this.httpClient.delete(`${this.localUrl}/employees/employee`, options);
  }

  public getEmployeeById(id: number) {

    return this.httpClient.post(`${this.localUrl}/employees/employee/search`, {filter: {EMPLOYEE_ID: id},
    columns: ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'CATEGORY_ID', 'EMPLOYEE_START_DATE']}, {headers: this.headers});
  }

  public getEmployees(url?: string) {
    return this.httpClient.post(`${this.localUrl}/employees/employee/search`,
    {columns: ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'CATEGORY_ID', 'EMPLOYEE_START_DATE']}, {headers: this.headers});
  }

  public getContacts(busqueda) {
    return this.httpClient.post<Employee[]>(`${this.localUrl}/employees/employee/search`,
    {columns: ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'CATEGORY_ID', 'EMPLOYEE_START_DATE']}, {headers: this.headers});
  }
  // Methods for Patients
  public createPatient(patients: Patient) {
    return this.httpClient.post(`${this.localUrl}/patients/patient`, { data: patients }, { headers: this.headers });
  }
  public getAllPatientList() {
    return this.httpClient.post(`${this.localUrl}/patients/patient/search`,
    {columns: ['PATIENT_ID', 'PATIENT_NAME', 'PATIENT_SURNAME', 'PATIENT_PHONE']} , { headers: this.headers });
  }
}
