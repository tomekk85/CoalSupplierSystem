import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleTableComponent } from './compontents/article-table/article-table.component';
import { SideNavComponent } from "./compontents/side-nav/side-nav.component";
import { StockArticleDialogComponent } from './compontents/stock-article-dialog/stock-article-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ArticleTableComponent,
    SideNavComponent,
    StockArticleDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
