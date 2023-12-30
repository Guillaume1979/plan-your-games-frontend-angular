import { Player } from './player';

export class Guild {
  id?: number;
  name = '';
  members: Player[] = [];
}
