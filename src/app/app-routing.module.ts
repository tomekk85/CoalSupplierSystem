import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewClientComponent} from './compontents/new-client/new-client.component';
import {SideNavComponent} from './compontents/side-nav/side-nav.component';
import {BazaKlientComponent} from './compontents/baza-klient/baza-klient.component';
import {PageNotFoundComponent} from './compontents/page-not-found/page-not-found.component';
import {BazaSuppliersComponent} from './compontents/baza-suppliers/baza-suppliers.component';
import {NewSupplierComponent} from './compontents/new-supplier/new-supplier.component';
import {MagazaynStanComponent} from './compontents/magazayn-stan/magazayn-stan.component';
import {ArticleTableComponent} from './compontents/article-table/article-table.component';
import {PZComponent} from './compontents/pz/pz.component';
import {StockArticleDialogComponent} from './compontents/stock-article-dialog/stock-article-dialog.component';
import {PriceListComponent} from './compontents/price-list/price-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'stock', pathMatch: 'full'},
  {path: 'newclient', component: NewClientComponent},
  {path: 'newsupplier', component: NewSupplierComponent},
  {path: 'clientbase', component: BazaKlientComponent},
  {path: 'supplierbase', component: BazaSuppliersComponent},
  {path: 'stock', component: MagazaynStanComponent},
  {path: 'pz', component: PZComponent},
  {path: 'price', component: PriceListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [SideNavComponent, NewClientComponent, NewSupplierComponent,
  BazaKlientComponent, BazaSuppliersComponent, PageNotFoundComponent, MagazaynStanComponent,
  ArticleTableComponent, PZComponent, StockArticleDialogComponent, PriceListComponent];
