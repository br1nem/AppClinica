import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatDialogModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [MessageDialogComponent, NavigationBarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [MessageDialogComponent, NavigationBarComponent]
})
export class SharedModule { }
