import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('connection button', () => {
    let connectionButton: DebugElement;
    let href: string;
    beforeEach(() => {
      connectionButton = fixture.debugElement.query(
        By.css('[data-testingId="connection"]'),
      );
      href = connectionButton.nativeElement.href;
    });

    it('should have a connection button', () => {
      expect(connectionButton).not.toBeNull();
    });

    it('should have a good API URL', () => {
      expect(href).toBe(component.ENDPOINT_AUTH_DISCORD);
    });
  });
});
