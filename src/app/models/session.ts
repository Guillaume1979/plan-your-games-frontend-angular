import { Game } from './game';

export class Session {
  id?: number;
  name = '';
  date = new Date();
  game = new Game();
}
