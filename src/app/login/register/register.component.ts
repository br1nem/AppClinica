import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group(
    {
      USER_: ['', [Validators.required]],
      PASSWORD: ['', [Validators.required]],
      NAME: ['', [Validators.required]],
      SURNAME: ['', [Validators.required]],
      EMAIL: ['', [Validators.required]],
      DNI: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );
  constructor(public loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  public register() {
    if (this.registerForm.valid) {
      this.loginService.register(this.registerForm.value).subscribe(
        res => {
          console.log('usuario registrado correctamente');
        }
      );
    }
  }

}
