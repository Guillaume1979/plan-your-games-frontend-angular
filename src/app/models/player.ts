import { Session } from './session';
import { Guild } from './guild';

export class Player {
  uuid?: string;
  username = '';
  avatar = '';
  guilds: Guild[] = [];
  sessions: Session[] = [];

  constructor(init?: Partial<Player>) {
    Object.assign(this, init);
  }
}
