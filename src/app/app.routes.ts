import { Route, Router, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthRedirectComponent } from './auth/auth-redirect.component';
import { inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

export const routesWithAuthentication = {
  path: '',
  children: [
    {
      path: 'dashboard',
      title: 'Tableau de bord',
      loadComponent: () =>
        import('./components/dashboard/dashboard.component').then(
          (m) => m.DashboardComponent,
        ),
      canMatch: [
        () =>
          inject(AuthService).isAuthenticated() ||
          inject(Router).createUrlTree(['']),
      ],
      //todo ajouter le auth guard (avec canMatch ?)
    },
    {
      path: 'sessions',
      loadComponent: () =>
        import('./components/session/session-list.component').then(
          (m) => m.SessionListComponent,
        ),
    },
  ],
};

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    //todo à compléter, pour les connexions sans authentification
    // ajouter un rapide descriptif du site et un bouton pour se connecter ou créer un compte
  },
  // {
  //   path:'not-authorized',
  //   //todo à compléter
  // },
  {
    path: '',
    canMatch: [() => inject(AuthService).isAuthenticated()],
    children: [
      {
        path: 'dashboard',
        title: 'Tableau de bord',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
        //todo ajouter le auth guard (avec canMatch ?)
      },
      {
        path: 'sessions',
        loadComponent: () =>
          import('./components/session/session-list.component').then(
            (m) => m.SessionListComponent,
          ),
      },
    ],
  },
  {
    path: `login`,
    component: AuthRedirectComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
    //todo à compléter. Page d'accueil du site quand non connecté
    //ajouter une redirection vers dashboard si présence d'un token
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
