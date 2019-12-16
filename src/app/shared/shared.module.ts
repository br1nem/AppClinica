import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [MessageDialogComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule
  ],
  exports: [MessageDialogComponent]
})
export class SharedModule { }
