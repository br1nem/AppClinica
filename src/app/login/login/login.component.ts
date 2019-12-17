import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group(
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );



  constructor(public loginService: LoginService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
  }

  public login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        res => {
          console.log('usuario correcto');
          this.router.navigate(['main/patients']);
        }
      );
    }
  }

}
