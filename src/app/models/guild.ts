import { User } from './user';

export class Guild {
  uuid?: number;
  name = '';
  discordId = '';
  icon? = '';
  members: User[] = [];
}
