import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commodity } from '../common/commodity';
import { CommodityStock } from '../common/commodity-stock';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  private baseUrl = 'http://localhost:8080/api/v1/commodities';
  private stockUrl = 'http://localhost:8080/api/v1/stock';

  constructor(private httpClient: HttpClient) { }

  getAllCommodities(): Observable<Commodity[]> {
    return this.httpClient.get<Commodity[]>(this.baseUrl);
  }

  addCommodity(commodity: Commodity) {
    return this.httpClient.post<Commodity>(this.baseUrl, commodity);
  }

  deleteCommodity(id: number): Observable<Commodity> {
    return this.httpClient.delete<Commodity>(this.baseUrl + "/" + id);
  }

  getCommodityStock(): Observable<CommodityStock[]> {
    return this.httpClient.get<Stock[]>(this.stockUrl).pipe(
      map(response => response.map(commodityStock => new CommodityStock(commodityStock)))
    )
  }
}

export interface Stock {
  amount: number;
  commodity: Commodity;
  id: number;
}
