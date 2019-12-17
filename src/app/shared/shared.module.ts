import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatDialogModule, MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardServictComponent } from './card-servict/card-servict.component';


@NgModule({
  declarations: [MessageDialogComponent, NavigationBarComponent, CardProductComponent, CardServictComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [MessageDialogComponent, NavigationBarComponent, CardProductComponent, CardServictComponent]
})
export class SharedModule { }
