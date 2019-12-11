import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';


export function loadMainModule() {
  return MainModule;
}

export function loadLoginModule() {
  return LoginModule;
}

export const routes: Routes = [
  { path: 'main', loadChildren: loadMainModule },
  { path: 'login', loadChildren: loadLoginModule },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
