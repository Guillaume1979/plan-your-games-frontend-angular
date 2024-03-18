import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { SessionService } from '../../services/session.service';
import { LayoutService } from '../../services/layout.service';
import { UserService } from '../../services/user.service';
import { AvatarComponent } from '../shared/avatar/avatar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CdkTableModule, NgOptimizedImage, AvatarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  sessionService = inject(SessionService);
  format = inject(LayoutService).format;
  user = inject(UserService).connectedUser;

  sessions = this.sessionService.sessions();
}
