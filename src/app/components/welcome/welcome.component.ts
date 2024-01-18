import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ENDPOINT_AUTH_DISCORD } from '../../../environment';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  discord = faDiscord;
  exclamation = faExclamation;
  protected readonly ENDPOINT_AUTH_DISCORD = ENDPOINT_AUTH_DISCORD;
}
