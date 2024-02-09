import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export type ScreenFormat = 'Handset' | 'Tablet' | 'Web';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  #breakpointObserver = inject(BreakpointObserver);
  #format = signal<ScreenFormat>('Handset');
  readonly format = this.#format.asReadonly();

  #breakpoints = toSignal(
    this.#breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .pipe(
        tap(() => {
          if (this.#breakpointObserver.isMatched(Breakpoints.Handset))
            this.#format.set('Handset');
          if (this.#breakpointObserver.isMatched(Breakpoints.Tablet))
            this.#format.set('Tablet');
          if (this.#breakpointObserver.isMatched(Breakpoints.Web))
            this.#format.set('Web');
        }),
      ),
  );
}
