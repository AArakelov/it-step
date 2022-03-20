import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarShipDialogComponent} from './star-ship-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    StarShipDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [StarShipDialogComponent]
})
export class StarShipDialogModule {
}
