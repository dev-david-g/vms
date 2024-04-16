import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { childRouteGuard } from './child-route.guard';

describe('childRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
