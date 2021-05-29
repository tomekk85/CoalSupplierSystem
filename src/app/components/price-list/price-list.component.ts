import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  displayedColumns: string[] = ['code', 'name', 'price', 'unit','edit'];
  dataSource: MatTableDataSource<Commodity>;
  commodities: Commodity[];
  form: FormGroup;
  updateItem: boolean = false;
  edit: boolean = false;

  @Input()
  selection: SelectionModel<Commodity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private commodityService: CommodityService, 
              public fb: FormBuilder,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      id: null,
      code: "",
      name: "",
      price: 0,
      unit: ""
    }) 
  }

  ngOnInit(): void {
    this.commodityService.getAllCommodities().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;

      this.dataSource.filterPredicate = (data, filter: string):boolean => {
        return data.name.toLowerCase().includes(filter) || data.code.toString().toLowerCase().includes(filter);
    }
    })

    if(this.selection != null || this.selection != undefined) {
      this.displayedColumns.push("select");
    }
  }

  userNotification(message, type) {
    this._snackBar.open(message,null, {
      duration: 2600,
      panelClass: type,
      verticalPosition: "top"
    })
  }

  addOrEdit(){
    this.edit = true;
  }

  editItem(item) {
    this.form.setValue({
      id: item.id,
      code: item.code,
      name: item.name,
      price: item.price,
      unit: item.unit
    })

    this.updateItem = true;
    this.edit = true;
  }

  addUpdateCommodity(){
    var formData: Commodity = {
      "id": this.form.value.id,
      "code": this.form.value.code,
      "name": this.form.value.name,
      "price": this.form.value.price,
      "unit": this.form.value.unit
    }

    this.commodityService.addCommodity(formData)
            .subscribe((response) => {
              this.ngOnInit();
              this.clearForm();
              this.userNotification("Dodano arytkuł: " +response.code, "success");
            },
            (error) => {
              console.log(error);
              this.userNotification("Nie udało się dodać artykułu", "error");
            }
            );
  }

  deleteCommodity() {
    this.commodityService.deleteCommodity(this.form.value.id)
          .subscribe(
            (response) => {
              this.ngOnInit();
              this.clearForm();
              this.userNotification("Usunięto arytkuł: " +response.code, "success");
            },
            (error) => {
                console.log(error);
                this.userNotification("Nie udało się usunąć artykułu", "error");
            }
          );
  }

  clearForm() {
    for(const field in this.form.controls) {
      this.form.get(field).setValue('');
    }

    this.updateItem = false;
    this.edit = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}