import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommodityDTO} from 'src/app/common/commodity-dto';
import { SupplierDTO } from 'src/app/common/supplier-dto';
import { SupplierService } from 'src/app/services/supplier.service';
import { StockArticleDialogComponent } from '../stock-article-dialog/stock-article-dialog.component';
import { GoodsReceiptService } from 'src/app/services/goodsReceipt.service';
import { StockItem } from 'src/app/common/stock-item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-gr',
  templateUrl: './warehouse-gr.component.html',
  styleUrls: ['./warehouse-gr.component.css']
})

export class WarehouseGrComponent implements OnInit {
  displayedColumns: string[] = ["code", "name", "amout"];
  items : CommodityDTO[] = [];  
  dataSource: MatTableDataSource<CommodityDTO>;
  selectedItems : CommodityDTO[] = [];
  itemsExists: boolean = false;
  selection: SelectionModel<CommodityDTO> = new SelectionModel<CommodityDTO>(true, []);

  @ViewChild('INDEX') _index: ElementRef;
  @ViewChild('NAME') _name: ElementRef;
  @ViewChild('ITEMID') _itemid: ElementRef;

  addItem : CommodityDTO;

  form: FormGroup;
  suppliers: SupplierDTO[] = [<SupplierDTO>{}];

  providerControl: FormControl = new FormControl(new SupplierDTO);

  constructor(public dialog: MatDialog, private supplierService: SupplierService, 
              public fb: FormBuilder, private goodReceiptService: GoodsReceiptService, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      dateOfIssue: "",
      issuer: "Admin",
      supplier: new FormControl(this.suppliers[0]),
    }) 
  }

  ngOnInit(): void {
    this.supplierService.getAllSuppliers().subscribe(data => {
       this.suppliers = data;
    })
  }

  saveGr(){
    var formData: GoodsReceipt = {
      "dateOfIssue": formatDate(this.form.value.dateOfIssue,'yyyy-MM-dd', 'en-US'),
      "issuer": this.form.value.issuer,
      "supplier": this.form.value.supplier,
      "items": this.items.map((item) => {
        return new StockItem(item.amount,item)
      })
    }

    this.goodReceiptService.addGR(formData).subscribe(
        (response) => {
          this.userNotification("Pomyślnie wystawiono dokument","success"),
          this.router.navigate(['/warehouse/stock'])
        },
        (error) => {
          this.userNotification("Błąd podczas wystawiania dokumentu","error")
        }
      );
  }

  userNotification(message, type) {
    this._snackBar.open(message,null, {
      duration: 2600,
      panelClass: type,
      verticalPosition: "top"
    })
  }

  @ViewChildren('AMOUT') amout : QueryList<ElementRef>;
  addData(index){
    
    let addItem : CommodityDTO = {
      id: this._itemid.nativeElement.value,
      code: this._index.nativeElement.value,
      name: this._name.nativeElement.value,
      amount: this.amout.toArray()[index].nativeElement.value
    }

    this.selectedItems.splice(index,1);

    this.items.push(addItem);
    this.dataSource = new MatTableDataSource(this.items);
  }

  openDialog(): void {
    this.selection = new SelectionModel<CommodityDTO>(true, []);
    const dialogRef = this.dialog.open(StockArticleDialogComponent, {
      width: '80%',
      data: {
        selection: this.selection,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null || result != undefined){
        this.selectedItems = result.selected;
        this.itemsExists = true;
      }
    });
  } 
}

export interface GoodsReceipt {
  dateOfIssue: string
  issuer: string,
  supplier: SupplierDTO
  items: StockItem[]
}
