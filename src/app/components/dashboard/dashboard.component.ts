import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { SessionService } from '../../services/session.service';
import { LayoutService } from '../../services/layout.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CdkTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  sessionService = inject(SessionService);
  format = inject(LayoutService).format;
  user = inject(UserService).connectedUser;

  // guilds = this.user().guilds;
  sessions = this.sessionService.sessions();
}
