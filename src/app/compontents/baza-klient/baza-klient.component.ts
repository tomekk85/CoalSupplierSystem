import {OnInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  id: number;
  name: string;
  surname: string;
  pesel: number;
  nip: string;
  regon: string;
  bdo: number;
  postal_code: string;
  city: string;
  street: string;
  house_nr: number;
  flat_nr: number;
  phone_nr: string;
  mail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1, name: 'Jan', surname: 'Kowalski', pesel: 64052100321, nip: '839-290-256',
    regon: '225145454', bdo: 545, postal_code: '76-200', city: 'Slupsk',
    street: 'Szczecinska', house_nr: 96, flat_nr: 101, phone_nr: '+48 506-956-369', mail: 'jan.kowalski@gmail.com'
  },
  {
    id: 2, name: 'Edek', surname: 'Nowak', pesel: 55032402121, nip: '839-290-256',
    regon: '225145454', bdo: 658, postal_code: '76-200', city: 'Slupsk',
    street: 'Wolnosci', house_nr: 15, flat_nr: 10, phone_nr: '+48 696-956-369', mail: 'edmund.nowak@gmail.com'
  },
  {
    id: 3, name: 'Alina', surname: 'Chojnacka', pesel: 87011111321, nip: '839-290-000',
    regon: '223575493', bdo: 101, postal_code: '76-200', city: 'Slupsk',
    street: 'Dmowskiego', house_nr: 2, flat_nr: 45, phone_nr: '+48 777-956-369', mail: 'alina.chojnacka@gmail.com'
  }
];

@Component({
  selector: 'app-baza-klient',
  templateUrl: './baza-klient.component.html',
  styleUrls: ['./baza-klient.component.css']
})
export class BazaKlientComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'pesel', 'nip', 'regon',
    'bdo', 'postal_code', 'city', 'street', 'house_nr', 'flat_nr', 'phone_nr', 'mail'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
