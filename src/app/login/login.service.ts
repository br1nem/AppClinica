import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register/register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {
  }

  login({ username , password }: { username: string, password: string }) {
    return this.http.post('http://localhost:8080/clinica-jee/services/rest/users/login', {
      columns: ['USER_', 'PASSWORD'],
      filter: {
        USER_: username,
        PASSWORD: password
      }
    });
  }

  register(register: Register) {
      return this.http.post('http://localhost:8080/clinica-jee/services/rest/users/user', { data: register });
  }
}
