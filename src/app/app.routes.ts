import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { authGuard } from './core/guards/auth.guard';
import { roleManager } from './core/guards/role-manager.guard';
import { dataResolver } from './core/resolvers/data.resolver';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { ManagerProfileComponent } from './profile/manager-profile/manager-profile.component';
import { VmsDashboardComponent } from './vms-dashboard/vms-dashboard.component';
import { VmsDetailsEditComponent } from './vms-details/vms-details-edit/vms-details-edit.component';
import { VMS_DETAILS_ROUTES } from './vms-details/vms-details.routes';
import { VmsListComponent } from './vms-list/vms-list.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () =>
      import('./vms-dashboard/vms-dashboard.component').then(
        () => VmsDashboardComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Virtual machines service - Login',
    component: LoginComponent,
  },
  {
    path: 'admin-view',
    loadComponent: () =>
      import('./admin-view/admin-view.component').then(
        () => AdminViewComponent
      ),
    canActivate: [authGuard],
    data: { roles: 'admin' },
  },
  {
    path: 'list',
    title: 'Virtual machines list',
    loadComponent: () =>
      import('./vms-list/vms-list.component').then(() => VmsListComponent),
    canActivate: [authGuard],
    data: { roles: ['manager', 'admin'] },
    resolve: [dataResolver],
  },

  {
    path: 'profile',
    title: 'Admin Profile',
    loadComponent: () =>
      import('./profile/admin-profile/admin-profile.component').then(
        () => AdminProfileComponent
      ),
    canMatch: [roleManager],
  },
  {
    path: 'profile',
    title: 'Manager Profile',
    loadComponent: () =>
      import('./profile/manager-profile/manager-profile.component').then(
        () => ManagerProfileComponent
      ),
  },

  {
    path: 'vms-details-edit',
    title: 'Virutal machines edit',
    loadComponent: () =>
      import('./vms-details/vms-details-edit/vms-details-edit.component').then(
        () => VmsDetailsEditComponent
      ),
    canDeactivate: [
      (component: VmsDetailsEditComponent) => !component.hasUnsavedChanges,
    ],
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./vms-details/vms-details.routes').then(() => VMS_DETAILS_ROUTES),
  },
  {
    path: 'unauthorized',
    title: 'Virtual machines Unauthorized',
    loadComponent: () =>
      import('./access-denied/access-denied.component').then(
        () => AccessDeniedComponent
      ),
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        () => PageNotFoundComponent
      ),
  },
];
