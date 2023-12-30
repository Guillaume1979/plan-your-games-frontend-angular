import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { SessionService } from '../../services/session.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Session } from '../../models/session';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CdkTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  sessionService = inject(SessionService);
  displayedColumns = ['date', 'game', 'participants'];
  sessions: Session[] = this.sessionService.sessions();

  ngOnInit() {}
}
