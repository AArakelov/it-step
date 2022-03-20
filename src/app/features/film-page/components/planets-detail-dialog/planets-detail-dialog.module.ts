import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsDetailDialogComponent } from './planets-detail-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PlanetsDetailDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [PlanetsDetailDialogComponent]
})
export class PlanetsDetailDialogModule { }
