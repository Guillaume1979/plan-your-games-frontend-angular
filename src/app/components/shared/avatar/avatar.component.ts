import { Component, computed, input } from '@angular/core';
import { Guild } from '../../../models/guild';
import { User } from '../../../models/user';
import { DISCORD_CDN } from '../../../../environment';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'avatar',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  source = input.required<User | Guild>();

  config = computed(() => {
    if (this.source() instanceof User) {
      return {
        category: 'user',
        label: 'du joueur',
        url: this.getUrl(this.source()),
        defaultUrl: 'assets/images/default_user.png',
      } as AvatarConfig;
    } else {
      return {
        category: 'guild',
        label: 'de la guilde',
        url: this.getUrl(this.source()),
        defaultUrl: 'assets/images/default_user.png',
      } as AvatarConfig;
    }
  });

  getUrl(source: User | Guild) {
    if (source instanceof User) {
      if (!source.discordId || !source.avatar)
        return 'assets/images/default_user.png';
      // return `${DISCORD_CDN}/avatars/${source.discordId}/${source.avatar}`
      return `${DISCORD_CDN}/avatars/294251344401793024/6e6b7d455cba4f7eddf98761172c7cb2`;
    } else {
      if (!source.discordId || !source.icon)
        return 'assets/images/group_icon.png';
      return `${DISCORD_CDN}/icons/${source.discordId}/${source.icon}`;
    }
  }
}

type AvatarConfig = {
  defaultUrl: string;
  url: string;
  category: 'user' | 'guild';
  label: string;
};
