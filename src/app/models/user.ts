import { Session } from './session';
import { Guild } from './guild';

export class User {
  uuid?: string;
  username = '';
  nickname = '';
  avatar = '';
  discordId = '';
  guilds: Guild[] = [];
  sessions: Session[] = [];

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
