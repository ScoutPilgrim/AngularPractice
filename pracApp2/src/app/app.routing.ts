import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import {DonaldComponent} from './donald/donald.component';
import {CrocComponent} from './croc/croc.component';
import {KekComponent} from './kek/kek.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'donald',
    component: DonaldComponent
  },
  {
    path: 'croc',
    component: CrocComponent
  },
  {
    path: 'kek',
    component: KekComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
