import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StarShip} from "../../../../shared/models";

@Component({
  selector: 'app-star-ship-dialog',
  templateUrl: './star-ship-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarShipDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<StarShipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StarShip,
  ) {
  }

}
