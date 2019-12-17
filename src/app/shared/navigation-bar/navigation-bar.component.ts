import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  change(variable) {
    console.log(variable);
    this.router.navigate(['/main/'.concat(variable)]);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
