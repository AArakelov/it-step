import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortTableComponent} from "./sort-table.component";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {TableColumnTemplateDirective} from "../../directives/table-column-template.directive";


@NgModule({
  declarations: [SortTableComponent, TableColumnTemplateDirective],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
  ],
  exports: [SortTableComponent, TableColumnTemplateDirective]
})
export class SortTableModule { }
