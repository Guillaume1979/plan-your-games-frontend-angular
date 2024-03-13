import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JWT_TOKEN_KEY } from '../../environment';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should log out properly', () => {
    it('should remove the jwt token', () => {
      sessionStorage.setItem(JWT_TOKEN_KEY, 'fakeJwt');
      service.logout();
      expect(sessionStorage.getItem(JWT_TOKEN_KEY)).toBeNull();
    });

    it('should disconnect the user', () => {
      service.logout();
      expect(service.isAuthenticated()).toBeFalse();
    });

    it('should navigate to the root url', () => {
      const routerSpy = spyOn(service.router, 'navigateByUrl');
      service.logout();
      expect(routerSpy).toHaveBeenCalledWith('');
    });
  });
});
