import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewClientComponent} from './compontents/new-client/new-client.component';
import {SideNavComponent} from './compontents/side-nav/side-nav.component';
import {BazaKlientComponent} from './compontents/baza-klient/baza-klient.component';
import {ClientComponent} from './compontents/client/client.component';
import {WarehouseComponent} from './compontents/warehouse/warehouse.component';
import {FakturaComponent} from './compontents/faktura/faktura.component';
import {CennikComponent} from './compontents/cennik/cennik.component';
import {UserComponent} from './compontents/user/user.component';
import {PageNotFoundComponent} from './compontents/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/sidenav', pathMatch: 'full'},
  {path: 'sidenav', component: SideNavComponent},
  {path: 'newclient', component: NewClientComponent},
  {path: 'clientbase', component: BazaKlientComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
export const routingComponents = [SideNavComponent, UserComponent, WarehouseComponent, ClientComponent,
  FakturaComponent, CennikComponent, NewClientComponent, BazaKlientComponent, PageNotFoundComponent];
