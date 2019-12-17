import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './register/register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {
  }

  login({ username , password }: { username: string, password: string }) {
    const options: any = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password)
      }),
      observe: 'response'
    };
    return this.http.post('http://localhost:8080/clinica-jee/services/rest/users/login', null, options);
  }

  register(register: Register) {
      return this.http.post('http://localhost:8080/clinica-jee/services/rest/users/user', { data: register });
  }

  logout() {
    localStorage.removeItem('id');
  }
}
