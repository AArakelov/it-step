import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {masterPageActions} from "../store";

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterPageComponent implements OnInit {



  ngOnInit(): void {

  }

}
