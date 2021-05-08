import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/common/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-stock-article-dialog',
  templateUrl: './stock-article-dialog.component.html',
  styleUrls: ['./stock-article-dialog.component.css']
})
export class StockArticleDialogComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'amout', 'select'];
  dataSource: MatTableDataSource<Article>;
  selection: SelectionModel<Article> = new SelectionModel<Article>(true, []);
  
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

  showSelection() {
    console.log(this.selection);
  }

}



  

  