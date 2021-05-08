import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/common/article';
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
  displayedColumns: string[] = ["index", "name", "amout"];
  items : Article[] = [];  
  dataSource: MatTableDataSource<Article>;
  selectedItems : Article[] = [new Article];
  itemsExists: boolean = false;

  @ViewChild('INDEX') _index: ElementRef;
  @ViewChild('NAME') _name: ElementRef;
  @ViewChild('AMOUT') _amout: ElementRef;

  addItem : Article;

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
    
    let addItem : Article = {
      index: this._index.nativeElement.value,
      name: this._name.nativeElement.value,
      amout: this.amout.toArray()[index].nativeElement.value
    }

    console.log(this.amout.toArray());

    this.selectedItems.splice(index,1);

    this.items.push(addItem);
    this.dataSource = new MatTableDataSource(this.items);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StockArticleDialogComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null || result != undefined){
        this.selectedItems = result.selected;
        this.itemsExists = true; 
      }
    });
  } 
}
