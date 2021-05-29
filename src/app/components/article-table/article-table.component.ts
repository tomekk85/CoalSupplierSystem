import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Commodity } from 'src/app/common/commodity';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements OnInit {
  @Input()
  displayedColumns: string[] = [];

  @Input()
  dataSource: MatTableDataSource<any>;

  @Input()
  selection: SelectionModel<any>;

  @Output()
  selectRow: EventEmitter<Commodity> = new EventEmitter<Commodity>();

  constructor() { }

  ngOnInit(): void {
  }

  doClick(row){
    this.selectRow.emit(row);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
  }

  doSth(){
    console.log(this.selection);
  }

}
