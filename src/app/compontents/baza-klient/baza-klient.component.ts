import {Component, OnInit} from '@angular/core';

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
  {id: 1, name: 'Jan', surname: 'Kowalski', pesel: 64052100321, nip: '839-290-256',
    regon: '22 51454 5454', bdo: 545, postal_code: '76-200', city: 'Slupsk',
    street: 'Szczecinska', house_nr: 96, flat_nr: 101, phone_nr: '+48 506-956-369', mail: 'jan.kowalski@gmail.com'}
];

@Component({
  selector: 'app-baza-klient',
  templateUrl: './baza-klient.component.html',
  styleUrls: ['./baza-klient.component.css']
})
export class BazaKlientComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'pesel', 'nip', 'regon',
    'bdo', 'postal_code', 'city', 'street', 'house_nr', 'flat_nr', 'phone_nr', 'mail'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
