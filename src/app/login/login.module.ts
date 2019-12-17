import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class LoginModule {

 }
