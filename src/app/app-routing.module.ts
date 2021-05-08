import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WarehouseGrComponent } from "./compontents/warehouse-gr/warehouse-gr.component";
import { WarehouseMainComponent } from "./compontents/warehouse-main/warehouse-main.component";
import { WarehouseStockComponent } from "./compontents/warehouse-stock/warehouse-stock.component";

const routes: Routes = [
    {path: '', redirectTo: 'warehouse', pathMatch: "full"},
    {path: 'warehouse', component: WarehouseMainComponent},
    {path: 'warehouse/stock', component: WarehouseStockComponent},
    {path: 'warehouse/gr', component: WarehouseGrComponent}
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
]