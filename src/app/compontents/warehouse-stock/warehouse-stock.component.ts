import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Article } from 'src/app/common/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-warehouse-stock',
  templateUrl: './warehouse-stock.component.html',
  styleUrls: ['./warehouse-stock.component.css']
})
export class WarehouseStockComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'amout'];
  dataSource: MatTableDataSource<Article>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService) { 
    let bootstrapSortedData = articleService.getAllProducts().sort((a,b) => (a.index < b.index ? -1: 1));
    this.dataSource  = new MatTableDataSource(bootstrapSortedData);

    this.dataSource.filterPredicate = (data, filter: string):boolean => {
        return data.name.toLowerCase().includes(filter) || data.index.toString().includes(filter);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
