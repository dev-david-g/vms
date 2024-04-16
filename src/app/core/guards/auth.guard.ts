import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getCurrentUser();
  const requiredRoles = route.data['roles'] as string[];
  if (user && requiredRoles && requiredRoles.includes(user.role)) {
    // User is authenticated and has required role
    return true;
  }
  // Redirect unauthenticated users or users without required roles
  router.navigate(['/unauthorized']);
  return false;
};
