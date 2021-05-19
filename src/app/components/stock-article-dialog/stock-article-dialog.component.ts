import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Commodity } from 'src/app/common/commodity';

@Component({
  selector: 'app-stock-article-dialog',
  templateUrl: './stock-article-dialog.component.html',
  styleUrls: ['./stock-article-dialog.component.css']
})
export class StockArticleDialogComponent implements OnInit {

  selection: SelectionModel<Commodity>;
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.selection = data.selection;
  }

  ngOnInit(): void {
  }

  showSelection() {
    console.log(this.selection);
  }

}



  

  