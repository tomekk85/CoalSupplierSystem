import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WarehouseMainComponent } from './compontents/warehouse-main/warehouse-main.component';
import { WarehouseStockComponent } from './compontents/warehouse-stock/warehouse-stock.component';

const routes: Routes = [
  {path: 'warehouse', component: WarehouseMainComponent},
  {path: 'warehouse/stock', component: WarehouseStockComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WarehouseMainComponent,
    WarehouseStockComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
