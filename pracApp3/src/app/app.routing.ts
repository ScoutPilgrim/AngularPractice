import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {PandoraComponent} from './pandora/pandora.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'pandora',
    component: PandoraComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
