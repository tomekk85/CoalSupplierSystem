import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

interface Provider {
  nip: number;
  name: string;
  id: number;
  nameMark: string;
}

export interface GRItem {
  fab: number;
  name: string;
  amout: number;
  nettPrice: number;
  grossPrice: number;
  vat: number;
}

@Component({
  selector: 'app-warehouse-gr',
  templateUrl: './warehouse-gr.component.html',
  styleUrls: ['./warehouse-gr.component.css']
})

export class WarehouseGrComponent implements OnInit {
  displayedColumns: string[] = ["fab", "name", "amout", "nettPrice", "grossPrice", "vat"];
  selection = new SelectionModel<GRItem>(true, []);
  items : GRItem[] = [];
  dataSource: MatTableDataSource<GRItem> = new MatTableDataSource(this.items);

  form: FormGroup;
  providers: Provider[] = [
    {id: 1, nameMark: "RafiqTransport", nip: 20392240982, name: "Shymmi Transport sp. Z.O.O"},
    {id: 2, nameMark: "BusTransport", nip: 20392240982, name: "Bus Transport sp. Z.O.O"},
    {id: 3, nameMark: "DHL", nip: 20392240982, name: "DHL sth sp. Z.O.O"},
    {id: 4, nameMark: "DPD", nip: 20392240982, name: "DPD sth sp. Z.O.O"}
  ]

  providerControl = new FormControl(this.providers[0].nameMark);

  @ViewChild('FAB') _fab: ElementRef;
  @ViewChild('NAME') _name: ElementRef;
  @ViewChild('AMOUT') _amout: ElementRef;
  @ViewChild('NETTPRICE') _nettPrice: ElementRef;
  @ViewChild('GROSSPRICE') _grossPrice: ElementRef;
  @ViewChild('VAT') _vat: ElementRef;


  constructor() { 
    this.form = new FormGroup({provider: this.providerControl});
  }

  ngOnInit(): void {
  }

  addData(){
    let addItem : GRItem = {
      fab: this._fab.nativeElement.value,
      name: this._name.nativeElement.value,
      amout: this._amout.nativeElement.value,
      nettPrice: this._nettPrice.nativeElement.value,
      grossPrice: this._grossPrice.nativeElement.value,
      vat: this._vat.nativeElement.value
    }
    this.items.push(addItem);
    this.dataSource = new MatTableDataSource(this.items);
    this.clearInput();
  }

  clearInput() {
    this._fab.nativeElement.value = "";
    this._name.nativeElement.value = "";
    this._amout.nativeElement.value = "";
    this._nettPrice.nativeElement.value = "";
    this._grossPrice.nativeElement.value = "";
    this._vat.nativeElement.value = "";
  }

}
