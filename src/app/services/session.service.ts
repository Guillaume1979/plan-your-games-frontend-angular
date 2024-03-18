import { Injectable, signal } from '@angular/core';
import { Session } from '../models/session';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessions = signal<Session[]>([
    {
      date: new Date(2022, 3, 1),
      game: { name: 'Icarus' },
      participants: [
        new User({ username: 'Alice' }),
        new User({
          username: 'Guitou',
          discordId: '294251344401793024',
          avatar: '6e6b7d455cba4f7eddf98761172c7cb2',
        }),
        new User({ username: 'Toto' }),
      ],
    },
    {
      date: new Date(2023, 11, 31),
      game: { name: 'Mechabellum' },
      participants: [
        new User({ username: 'Guitou' }),
        new User({ username: 'Kojak' }),
      ],
    },
    {
      date: new Date(2024, 2, 19),
      game: { name: 'Humankind' },
      participants: [],
    },
  ]);

  constructor() {}
}
