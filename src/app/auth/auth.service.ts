import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT_JWT, JWT_TOKEN_KEY } from '../../environment';
import { catchError, switchMap, tap } from 'rxjs';
import { JwtToken } from '../models/interfaces';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  userService = inject(UserService);

  isAuthenticated = signal<boolean>(false);

  constructor() {
    if (sessionStorage.getItem(JWT_TOKEN_KEY)) this.isAuthenticated.set(true);
  }

  login(code: string): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${code}`,
    });
    const login = toSignal(
      this.http.post<JwtToken>(ENDPOINT_JWT, {}, { headers }).pipe(
        tap((token) =>
          sessionStorage.setItem(JWT_TOKEN_KEY, token.access_token),
        ),
        switchMap(() =>
          this.userService.getUserInfo().pipe(
            tap(() => this.isAuthenticated.set(true)),
            tap(() => this.router.navigateByUrl('dashboard')),
          ),
        ),

        //todo ajouter une snackbar quand il y a une erreur d'authentification
        // rendre la gestion d'erreur globale !
        catchError((err) => this.router.navigateByUrl('')),
      ),
    );
  }

  logout() {
    sessionStorage.removeItem(JWT_TOKEN_KEY);
    this.isAuthenticated.set(false);
    this.router.navigateByUrl('');
  }
}
