import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortTableComponent implements OnInit {

  @Input() columns: string[];
  @Input() dataSource: any = []

  private sortedData: any = []

  constructor() {
    this.sortData = this.dataSource.slice()
  }

  ngOnInit(): void {
  }


  public sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
