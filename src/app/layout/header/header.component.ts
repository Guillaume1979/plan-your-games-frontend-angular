import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faRightFromBracket,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ENDPOINT_AUTH_DISCORD } from '../../../environment';
import { LayoutService } from '../../services/layout.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faLogin = faRightToBracket;
  faLogout = faRightFromBracket;

  format = inject(LayoutService).format;
  authService = inject(AuthService);
  connectedUser = inject(UserService).connectedUser;

  protected readonly ENDPOINT_AUTH_DISCORD = ENDPOINT_AUTH_DISCORD;
}
