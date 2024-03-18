import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { ENDPOINT_API } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  PATH = 'users';

  #connectedUser = signal(new User());
  connectedUser = this.#connectedUser.asReadonly();

  constructor() {
    this.getUserInfo().subscribe();
    //todo à virer
    let newUser = new User({
      guilds: [
        {
          name: 'Vétérans',
          icon: '2686dbc71cc8bc75262223225b702518',
          discordId: '151065290715824128',
          members: [],
        },
      ],
    });
    this.#connectedUser.set(newUser);
  }

  getUserInfo(): Observable<User> {
    return this.http
      .get<User>(`${ENDPOINT_API}/${this.PATH}/me`)
      .pipe(tap((user) => this.#connectedUser.set(user)));
  }
}
