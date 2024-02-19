import { Injectable, signal } from '@angular/core';
import { Session } from '../models/session';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessions = signal<Session[]>([
    {
      date: new Date(2022, 3, 1),
      game: { name: 'Icarus' },
      participants: [
        new Player({ username: 'Alice' }),
        new Player({ username: 'Guitou' }),
        new Player({ username: 'Toto' }),
      ],
    },
    {
      date: new Date(2023, 11, 31),
      game: { name: 'Mechabellum' },
      participants: [
        new Player({ username: 'Guitou' }),
        new Player({ username: 'Kojak' }),
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
