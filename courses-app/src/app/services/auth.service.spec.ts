import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const key = 'angular-app-user';

  beforeEach(() => { service = new AuthService(); });

  it('AuthService should work', () => {
    service.login('test', 'test');
    expect(service.isAuthenticated()).toBeTruthy();
    expect(service.getUserInfo()).toBe('test');
    service.logout();
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
