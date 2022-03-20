import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChildren, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output, QueryList,
  SimpleChanges, TemplateRef, ViewChild
} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {TableColumnTemplateDirective} from "../../directives/table-column-template.directive";
import {Function1, get} from 'lodash'

export interface IColumn {
  label: string;
  propertyPath: string;
  sortTable?: boolean;
  defaultValue?: any;
  headerTemplate?: any;
  template?: any
}

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortTableComponent implements OnInit, OnChanges, AfterContentInit {

  @Input()
  columns: IColumn[];
  @Input() dataSource: any[];
  @Output() rowEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output()sortChange = new EventEmitter();

  @ContentChildren(TableColumnTemplateDirective)
  templates: QueryList<TableColumnTemplateDirective>;
  @ViewChild(MatSort) sort: MatSort;

  displayNameColumns: string[];
  private sortedData: any = [];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.setDisplayColumns();
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.setDisplayColumns();
      this.cdRef.detectChanges();
    }
  }

  ngAfterContentInit() {
    this.setTemplate('template', (x) => !x.header)
    this.setTemplate('headerTemplate', (x) => !x.header)

    if (this.columns.find(x => x.template)) {
      this.cdRef.detectChanges()
    }
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }

  private setDisplayColumns() {
    const columns = this.columns.map(col => col.propertyPath);
    this.displayNameColumns = columns;
  }

  private setTemplate(settableField: string, filter: Function1<TableColumnTemplateDirective, boolean>) {
    const allTemplate = this.templates.toArray();
    const templates = allTemplate.filter(filter);

    let templateMap = new Map<string, TemplateRef<any>>();
    if (templates.length !== 0) {
      templates.forEach((t)=> {
        templateMap.set(t.columnName, t.templateRef);
      })
      this.columns.forEach((col) => {
        // @ts-ignore
        col[settableField] = templateMap.get(col.propertyPath)
      });
    }
  }

}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
