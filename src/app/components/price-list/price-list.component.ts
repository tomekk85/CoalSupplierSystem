import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Commodity } from 'src/app/common/commodity';
import { CommodityService } from 'src/app/services/commodity.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'price', 'unit'];
  dataSource: MatTableDataSource<Commodity>;
  commodities: Commodity[];

  @Input()
  selection: SelectionModel<Commodity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private commodityService: CommodityService) { 
  }

  ngOnInit(): void {
    this.commodityService.getAllCommodities().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;

      this.dataSource.filterPredicate = (data, filter: string):boolean => {
        return data.name.toLowerCase().includes(filter) || data.code.toString().includes(filter);
    }
    })

    if(this.selection != null || this.selection != undefined) {
      this.displayedColumns.push("select");
    }

    console.log(this.displayedColumns);
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