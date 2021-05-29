import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BazaKlientComponent } from "./components/baza-klient/baza-klient.component";
import { GrtableComponent } from "./components/grtable/grtable.component";
import { NewClientComponent } from "./components/new-client/new-client.component";
import { PriceListComponent } from "./components/price-list/price-list.component";
import { WarehouseGrComponent } from "./components/warehouse-gr/warehouse-gr.component";
import { WarehouseMainComponent } from "./components/warehouse-main/warehouse-main.component";
import { WarehouseStockComponent } from "./components/warehouse-stock/warehouse-stock.component";

const routes: Routes = [
    {path: 'pricelist', component: PriceListComponent},
    {path: 'warehouse/gr', component: WarehouseGrComponent},
    {path: 'warehouse/stock', component: WarehouseStockComponent},
    {path: 'warehouse', component: WarehouseMainComponent},
    {path: 'documents', component: GrtableComponent},
    {path: 'newclient', component: NewClientComponent},
    {path: 'clientbase', component: BazaKlientComponent},
    {path: '', redirectTo: 'warehouse', pathMatch: "full"},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [
    WarehouseGrComponent,
    WarehouseMainComponent,
    WarehouseStockComponent,
    PriceListComponent,
    NewClientComponent,
    BazaKlientComponent,
    GrtableComponent
]