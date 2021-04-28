import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {
}
