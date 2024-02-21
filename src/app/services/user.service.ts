import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Player } from '../models/player';
import { ENDPOINT_API } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  PATH = 'users';

  #connectedUser = signal(new Player());
  connectedUser = this.#connectedUser.asReadonly();

  constructor() {
    this.getUserInfo().subscribe();
  }

  getUserInfo(): Observable<Player> {
    return this.http
      .get<Player>(`${ENDPOINT_API}/${this.PATH}/me`)
      .pipe(tap((user) => this.#connectedUser.set(user)));
  }
}
