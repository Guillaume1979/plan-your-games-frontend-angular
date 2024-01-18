import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_API, ENDPOINT_JWT, JWT_TOKEN_KEY } from '../../environment';
import { catchError, Observable, tap } from 'rxjs';
import { JwtToken } from '../models/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

  isAuthenticated = signal<boolean>(false);

  #hasValidJWT() {
    const hasToken = false;
    this.isAuthenticated.set(hasToken);
  }

  login(): void {}

  getTokenFromBack(): Observable<JwtToken | boolean> {
    return this.http.get<JwtToken>(ENDPOINT_JWT).pipe(
      tap((token) => sessionStorage.setItem(JWT_TOKEN_KEY, token.access_token)),
      tap(() => this.isAuthenticated.set(true)),

      //todo ajouter une snackbar quand il y a une erreur d'authentification
      // rendre la gestion d'erreur globale !
      catchError((err) => this.router.navigateByUrl('')),
    );
  }
}
