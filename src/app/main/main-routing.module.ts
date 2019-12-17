import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AppointmentModule } from './appointment/appointment.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductsServicesModule } from './products-services/products-services.module';


export function loadAppointmentModule() {
  return AppointmentModule;
}

export function loadCustomersModule() {
  return CustomersModule;
}

export function loadEmployeesModule() {
  return EmployeesModule;
}

export function loadInvoiceModule() {
  return InvoiceModule;
}

export function loadProductsServicesModule() {
  return ProductsServicesModule;
}

const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'employees', loadChildren: loadEmployeesModule},
  {path: 'patients', loadChildren: loadCustomersModule},
  {path: 'appointment', loadChildren: loadAppointmentModule},
  {path: 'invoice', loadChildren: loadInvoiceModule},
  {path: 'products', loadChildren: loadProductsServicesModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
