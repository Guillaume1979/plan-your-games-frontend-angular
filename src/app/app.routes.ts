import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
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
    path: 'welcome',
    component: WelcomeComponent,
    //todo à compléter, pour les connexions sans authentification
    // ajouter un rapide descriptif du site et un bouton pour se connecter ou créer un compte
  },
  {
    path: 'sessions',
    loadComponent: () =>
      import('./components/session/session-list.component').then(
        (m) => m.SessionListComponent,
      ),
  },
  // {
  //   path:'not-authorized',
  //   //todo à compléter
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
    //todo à compléter. Page d'accueil du site quand non connecté
    //ajouter une redirection vers dashboard si présence d'un token
  },
  {
    path: '**',
    redirectTo: '',
  },
];
