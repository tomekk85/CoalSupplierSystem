import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoodsReceipt } from '../components/warehouse-gr/warehouse-gr.component';

@Injectable({
  providedIn: 'root'
})
export class GoodsReceiptService {

  private baseUrl = 'http://localhost:8080/api/v1/goods_receipt';

  constructor(private httpClient: HttpClient) { }

  addGR(gr: GoodsReceipt) {
    return this.httpClient.post<GoodsReceipt>(this.baseUrl, gr);
  }
}
