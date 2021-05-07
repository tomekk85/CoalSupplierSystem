import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface StockItem {
  name: string;
  index: number;
  amout: number;
}

const BOOTSTRAP_DATA: StockItem[] = [
  {index: 2003, name: "Wungiel Czarny", amout: 4003},
  {index: 1033, name: "Wungiel Czarn", amout: 43},
  {index: 2001, name: "Wungiel Czar", amout: 4403},
  {index: 1534, name: "Wungiel Cza", amout: 1003},
  {index: 1332, name: "Wungiel Cz", amout: 3},
  {index: 2213, name: "Wungiel C", amout: 203},
  {index: 1663, name: "Wungiel", amout: 6003},
  {index: 1887, name: "Wungie Czarny", amout: 7003},
  {index: 3203, name: "Wungi Czarny", amout: 1003},
  {index: 1433, name: "Wung Czarny", amout: 7003},
  {index: 2031, name: "Wun Czarny", amout: 4603},
  {index: 1234, name: "Wu Czarny", amout: 3603},
  {index: 2332, name: "W Czarny", amout: 4233},
  {index: 2513, name: "Czarny", amout: 1323},
  {index: 1663, name: "Ungiel Czarny", amout: 113},
  {index: 1897, name: "Ungiel Biały", amout: 4303},
  
];

@Component({
  selector: 'app-warehouse-stock',
  templateUrl: './warehouse-stock.component.html',
  styleUrls: ['./warehouse-stock.component.css']
})
export class WarehouseStockComponent implements OnInit {
  displayedColumns: string[] = ['index', 'name', 'amout'];
  dataSource: MatTableDataSource<StockItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { 
    let bootstrapSortedData = BOOTSTRAP_DATA.sort((a,b) => (a.index < b.index ? -1: 1));
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
