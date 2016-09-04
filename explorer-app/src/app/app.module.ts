import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { MapComponent } from './map/map.component';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdMenuModule } from '@angular2-material/menu';
import { MdIconModule } from '@angular2-material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    CardDetailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  providers: [
    CardService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
