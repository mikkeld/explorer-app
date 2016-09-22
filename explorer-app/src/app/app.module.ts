import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { MapComponent } from './map/map.component';
import { UserService } from './user/user.service';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdMenuModule } from '@angular2-material/menu';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdListModule } from '@angular2-material/list';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { CreateCardComponent } from './card/create-card/create-card.component';
import { FavoriteCardsComponent } from './favorite-cards/favorite-cards.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { BikesComponent } from './bikes/bikes.component';
import { BikestandSearchComponent } from './bikes/bikestand-search/bikestand-search.component';
import { BikestandStatComponent } from './bikes/bikestand-stat/bikestand-stat.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA-Grss9k2dfwX9SS_nsKRgNlDOxu7NFxU",
  authDomain: "explorer-app-12f14.firebaseapp.com",
  databaseURL: "https://explorer-app-12f14.firebaseio.com",
  storageBucket: "explorer-app-12f14.appspot.com",
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardComponent,
    CardDetailComponent,
    MapComponent,
    CreateCardComponent,
    FavoriteCardsComponent,
    WeatherComponent,
    BikesComponent,
    BikestandSearchComponent,
    BikestandStatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdCheckboxModule,
    MdListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHwOMFMSURDztiCUxo4Jd-cIO8OmAjxAY'
    })
  ],
  providers: [
    CardService,
    UserService,
    WeatherService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
