import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Patient } from './patients';
import { Appointment } from './appointment';
import { Product } from './products';

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

  id: string = localStorage.getItem('id');
  // Las letras que están a continuación de bearer se obtuvieron mediante la llamada al login desde el postman
  // deberia obtenerse mediante la llamada desde el servicio login y guardandolo como guardamos el role
  headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.id}`, 'Content-type': 'application/json'
  });

  /** Methods for use backend in frontend */
  public createEmployee(employee: Employee) {
    const aux = employee.CATEGORY_ID.CATEGORY_ID;
    employee.CATEGORY_ID = aux;
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

    return this.httpClient.post(`${this.localUrl}/employees/employee/search`, {
      filter: { EMPLOYEE_ID: id },
      columns: ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'CATEGORY_ID', 'EMPLOYEE_START_DATE']
    }, { headers: this.headers });
  }

  public getEmployees(url?: string) {
    console.log(this.headers);
    return this.httpClient.post(`${this.localUrl}/employees/employee/search`,
      { columns: ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'CATEGORY_ID', 'EMPLOYEE_START_DATE'] }, { headers: this.headers });
  }

  public getContacts(busqueda) {
    return this.httpClient.post<Employee[]>(`${this.localUrl}/employees/employee/search`,
      { columns: ['EMPLOYEE_ID', 'EMPLOYEE_NAME', 'CATEGORY_ID', 'EMPLOYEE_START_DATE'] }, { headers: this.headers });
  }
  // Methods for Patients
  public createPatient(patients: Patient) {
    return this.httpClient.post(`${this.localUrl}/patients/patient`, { data: patients }, { headers: this.headers });
  }
  public getAllPatientList() {
    return this.httpClient.post(`${this.localUrl}/patients/patient/search`,
      { columns: ['PATIENT_ID', 'PATIENT_NAME', 'PATIENT_SURNAME', 'PATIENT_PHONE'] }, { headers: this.headers });
  }

  public deletePatient(id: number) {
    const options: any = {
      headers: this.headers,
      body: JSON.stringify({
        filter: { PATIENT_ID: id }
      })
    };

    return this.httpClient.delete(`${this.localUrl}/patients/patient`, options);
  }

  public updatePatient(patient: Patient) {
    return this.httpClient.put(`${this.localUrl}/patients/patient`, { filter: { PATIENT_ID: patient.PATIENT_ID }, data: patient },
      { headers: this.headers });
  }
  // Methods for Product
  public createProduct(products: Product) {
    return this.httpClient.post(`${this.localUrl}/assets/product`, { data: Product }, { headers: this.headers });
  }
  public getProducts() {
    return this.httpClient.post(`${this.localUrl}/assets/product/search`,
      { columns: ['PRODUCT_ID', 'PRODUCT_NAME', 'SUPPLIER_ID', 'CATEGORY_PRODUCT_ID', 'PRODUCT_STOCK',
       'PRODUCT_PRICE'] }, { headers: this.headers });
  }

  public getProductById(id: number) {
    return this.httpClient.post(`${this.localUrl}/assets/product/search`,
    { columns: ['PRODUCT_ID', 'PRODUCT_NAME', 'SUPPLIER_ID', 'CATEGORY_PRODUCT_ID', 'PRODUCT_STOCK',
    'PRODUCT_PRICE'], filter: { PRODUCT_ID: id } }, { headers: this.headers });
  }
// Methods for categories
  public getCategories(url?: string) {
    return this.httpClient.post(`${this.localUrl}/employees/category/search`,
    {columns: ['CATEGORY_ID', 'CATEGORY_NAME']}, {headers: this.headers});
  }


  public getAppointments(url?: string) {
    return this.httpClient.post(`${this.localUrl}/employees/appointment/search`,
    {columns: ['APPOINTMENT_ID', 'PATIENT_ID', 'EMPLOYEE_ID', 'APPOINTMENT_DATE']}, {headers: this.headers});
  }

  public getCompleteAppoinments() {
    return this.httpClient.post(`${this.localUrl}/employees/completeAppointment/search`, {
      columns: ['APPOINTMENT_ID', 'APPOINTMENT_DATE', 'CATEGORY_NAME', 'CATEGORY_ROOM', 'PATIENT_NAME']
    }
    , {headers: this.headers});
  }

  public getMaxAppoinment() {
    return this.httpClient.post(`${this.localUrl}/employees/maxAppointment/search`, {
      columns: ['MAXIMO']
    }
    , {headers: this.headers});
  }

  public createAppointment(appointment: Appointment) {
    return this.httpClient.post(`${this.localUrl}/employees/appointment`, { data: appointment }, { headers: this.headers });
  }
  // Methods for services
  public getServices(url?: string) {
    return this.httpClient.post(`${this.localUrl}/assets/service/search`,
      { columns: ['SERVICE_ID', 'SERVICE_NAME', 'SERVICE_PRICE'] }, { headers: this.headers });
  }

}
