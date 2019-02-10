import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import { Router } from '@angular/router';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [AuthGuardGuard, { provide: Router, useValue: routerSpy }]
    });
  });

  it('should ...', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
