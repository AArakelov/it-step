import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Planet} from "../../../../shared/models";

@Component({
  selector: 'app-planets-detail-dialog',
  templateUrl: './planets-detail-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PlanetsDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Planet,
  ) {
  }

}
