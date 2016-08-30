import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import {MapComponent} from './map/map.component';

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
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
