import { Game } from './game';
import { User } from './user';

export class Session {
  id?: number;
  date = new Date();
  game = new Game();
  participants: User[] = [];
}
