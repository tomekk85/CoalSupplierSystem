import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleTableComponent } from "./components/article-table/article-table.component";
import { StockArticleDialogComponent } from "./components/stock-article-dialog/stock-article-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { CommodityService } from "./services/commodity.service";
import { SupplierService } from "./services/supplier.service";
import { GrtableComponent } from './components/grtable/grtable.component';
import { PriceListComponent } from "./components/price-list/price-list.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { BazaKlientComponent } from "./components/baza-klient/baza-klient.component";
import { NewClientComponent } from "./components/new-client/new-client.component";
import { WarehouseGrComponent } from "./components/warehouse-gr/warehouse-gr.component";
import { WarehouseMainComponent } from "./components/warehouse-main/warehouse-main.component";
import { WarehouseStockComponent } from "./components/warehouse-stock/warehouse-stock.component";

@NgModule({
  declarations: [
    AppComponent,
    ArticleTableComponent,
    StockArticleDialogComponent,
    PriceListComponent,
    SideNavComponent,
    GrtableComponent,
    WarehouseGrComponent,
    WarehouseMainComponent,
    WarehouseStockComponent,
    NewClientComponent,
    BazaKlientComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CommodityService, SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
