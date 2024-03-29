import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  let interceptor: AuthInterceptor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthInterceptor,
          useClass: AuthInterceptor,
        },
      ],
    });
    interceptor = TestBed.inject(AuthInterceptor);
  });
  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
