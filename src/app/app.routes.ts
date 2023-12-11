import { Routes } from '@angular/router';

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
  // {
  //   path: 'welcome',
  //   //todo à compléter, pour les connexions sans authentification
  //   // ajouter un rapide descriptif du site et un bouton pour se connecter ou créer un compte
  // },
  // {
  //   path:'not-authorized',
  //   //todo à compléter
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   //todo à compléter. Page d'accueil du site quand non connecté
  //   //ajouter une redirection vers dashboard si présence d'un token
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
