import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleTableComponent } from "./components/article-table/article-table.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { StockArticleDialogComponent } from "./components/stock-article-dialog/stock-article-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { CommodityService } from "./services/commodity.service";
import { PriceListComponent } from './components/price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ArticleTableComponent,
    SideNavComponent,
    StockArticleDialogComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CommodityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
