import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    MatDatepickerModule,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
