import { Game } from './game';
import { Player } from './player';

export class Session {
  id?: number;
  date = new Date();
  game = new Game();
  participants: Player[] = [];
}
