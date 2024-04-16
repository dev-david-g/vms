import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const randomGuard: CanMatchFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('currentUser');
  return token ? true : router.navigateByUrl('/login');
};
