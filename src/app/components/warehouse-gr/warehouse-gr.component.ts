import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommodityDTO } from 'src/app/common/commodity-dto';
import { StockArticleDialogComponent } from '../stock-article-dialog/stock-article-dialog.component';

interface Provider {
  nip: number;
  name: string;
  id: number;
  nameMark: string;
}

@Component({
  selector: 'app-warehouse-gr',
  templateUrl: './warehouse-gr.component.html',
  styleUrls: ['./warehouse-gr.component.css']
})

export class WarehouseGrComponent implements OnInit {
  displayedColumns: string[] = ["code", "name", "amout"];
  items : CommodityDTO[] = [];  
  dataSource: MatTableDataSource<CommodityDTO>;
  selectedItems : CommodityDTO[] = [new CommodityDTO];
  itemsExists: boolean = false;
  selection: SelectionModel<CommodityDTO> = new SelectionModel<CommodityDTO>(true, []);

  @ViewChild('INDEX') _index: ElementRef;
  @ViewChild('NAME') _name: ElementRef;
  @ViewChild('AMOUT') _amout: ElementRef;

  addItem : CommodityDTO;

  form: FormGroup;
  providers: Provider[] = [
    {id: 1, nameMark: "RafiqTransport", nip: 20392240982, name: "Shymmi Transport sp. Z.O.O"},
    {id: 2, nameMark: "BusTransport", nip: 20392240982, name: "Bus Transport sp. Z.O.O"},
    {id: 3, nameMark: "DHL", nip: 20392240982, name: "DHL sth sp. Z.O.O"},
    {id: 4, nameMark: "DPD", nip: 20392240982, name: "DPD sth sp. Z.O.O"}
  ]

  providerControl = new FormControl(this.providers[0].nameMark);

  constructor(public dialog: MatDialog) { 
    this.form = new FormGroup({provider: this.providerControl});
  }

  ngOnInit(): void {
  }

  @ViewChildren('AMOUT') amout : QueryList<ElementRef>;
  addData(index){
    
    let addItem : CommodityDTO = {
      code: this._index.nativeElement.value,
      name: this._name.nativeElement.value,
      amout: this.amout.toArray()[index].nativeElement.value
    }

    this.selectedItems.splice(index,1);

    this.items.push(addItem);
    this.dataSource = new MatTableDataSource(this.items);
  }



  openDialog(): void {
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
