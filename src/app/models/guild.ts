import { Player } from './player';

export class Guild {
  uuid?: number;
  name = '';
  icon? = '';
  members: Player[] = [];
}
