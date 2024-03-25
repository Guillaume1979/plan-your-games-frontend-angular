import { Route, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthRedirectComponent } from './auth/auth-redirect.component';
import { inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

export const routesWithAuthentication: Route = {
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
  },
  routesWithAuthentication,
  {
    path: `login`,
    component: AuthRedirectComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
