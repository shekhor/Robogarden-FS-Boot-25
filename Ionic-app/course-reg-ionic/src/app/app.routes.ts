import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full',
  },
  {
    path: 'header',
    loadComponent: () => import('./header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'registration',
    loadComponent: () => import('./registration/registration.page').then( m => m.RegistrationPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
];
