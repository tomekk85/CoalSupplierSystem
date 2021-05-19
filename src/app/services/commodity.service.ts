import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commodity } from '../common/commodity';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  private baseUrl = 'http://localhost:8080/api/v1/commodities';

  constructor(private httpClient: HttpClient) { }

  getAllCommodities(): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>(this.baseUrl);
  }
}
