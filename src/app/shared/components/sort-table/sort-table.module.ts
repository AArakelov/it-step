import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortTableComponent} from "./sort-table.component";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [SortTableComponent],
  imports: [
    CommonModule,
    MatSortModule,
  ],
  exports: [SortTableComponent]
})
export class SortTableModule { }
