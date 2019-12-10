import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';

export function loadMainModule() {
  return MainModule;
}


export const routes: Routes = [
  { path: 'main', loadChildren: loadMainModule },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
