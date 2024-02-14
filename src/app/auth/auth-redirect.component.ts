import { Component, inject, OnDestroy } from '@angular/core';
import { catchError, Observable, Subscription, tap } from 'rxjs';
import { JwtToken } from '../models/interfaces';
import { ENDPOINT_API } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth-redirect',
  standalone: true,
  imports: [],
  template: '',
  styles: '',
})
export class AuthRedirectComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  constructor() {
    this.#login();
  }

  #login() {
    this.#checkIfCodeIsPresent(this.route);
  }

  #checkIfCodeIsPresent(route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((param) => {
      const code = param.get('code');
      if (code) this.authService.login(code);
    });
  }
}
