import { Game } from './game';
import { User } from './user';

export class Session {
  uuid?: string;
  title?: string;
  date = new Date();
  game = new Game();
  participants: User[] = [];
}
