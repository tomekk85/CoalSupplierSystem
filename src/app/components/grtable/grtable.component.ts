import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Grdto } from 'src/app/common/grdto';
import { GoodsReceiptService } from 'src/app/services/goodsReceipt.service';

@Component({
  selector: 'app-grtable',
  templateUrl: './grtable.component.html',
  styleUrls: ['./grtable.component.css']
})
export class GrtableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dateOfIssue', 'supplier'];
  dataSource: MatTableDataSource<Grdto>;
  commodities: Grdto[] = [];

  constructor(private grServie: GoodsReceiptService) { }

  ngOnInit(): void {
    this.grServie.findAll().subscribe( data => 
      this.dataSource = new MatTableDataSource(data));
  }

  

}
