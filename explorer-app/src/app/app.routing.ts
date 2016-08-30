import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
  {
    path: 'cards',
    component: CardComponent
  },
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
