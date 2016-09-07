import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import {MapComponent} from './map/map.component';
import {FavoriteCardsComponent} from "./favorite-cards/favorite-cards.component";
import {WeatherComponent} from "./weather/weather.component";

const appRoutes: Routes = [
  {
    path: 'cards',
    component: CardComponent
  },
  {
    path: 'card/:id',
    component: CardDetailComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'favorites',
    component: FavoriteCardsComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
