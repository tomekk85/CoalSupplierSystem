import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Commodity } from 'src/app/common/commodity';
import { CommodityStock } from 'src/app/common/commodity-stock';
import { CommodityService } from 'src/app/services/commodity.service';


@Component({
  selector: 'app-warehouse-stock',
  templateUrl: './warehouse-stock.component.html',
  styleUrls: ['./warehouse-stock.component.css']
})
export class WarehouseStockComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'amout', 'unit'];
  dataSource: MatTableDataSource<CommodityStock>;
  commodities: CommodityStock[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private commodityService: CommodityService) { 
  }

  ngOnInit(): void {
    this.commodityService.getCommodityStock().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

      this.dataSource.paginator = this.paginator;

      this.dataSource.filterPredicate = (data, filter: string):boolean => {
        return data.name.toLowerCase().includes(filter) || data.code.toString().toLowerCase().includes(filter);
    }
    })
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}