import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierDTO } from '../common/supplier-dto';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  private baseUrl = 'http://localhost:8080/api/v1/suppliers';

  constructor(private httpClient: HttpClient) { }

  getAllSuppliers(): Observable<SupplierDTO[]> {
    return this.httpClient.get<SupplierDTO[]>(this.baseUrl);
  }
}
