import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
