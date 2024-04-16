import { Routes } from '@angular/router';
import { VmsListComponent } from './vms-list/vms-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './core/guards/auth.guard';
import { randomGuard } from './core/guards/random.guard';
import { dataResolver } from './core/resolvers/data.resolver';
import { VMS_DETAILS_ROUTES } from './vms-details/vms-details.routes';
import { VmsDashboardComponent } from './vms-dashboard/vms-dashboard.component';
import { SwitchExampleComponent } from './built-in-control-flow/switch-example/switch-example.component';
import { IfExampleComponent } from './built-in-control-flow/if-example/if-example.component';
import { ForExampleComponent } from './built-in-control-flow/for-example/for-example.component';

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
    path: 'switch-example',
    title: 'Switch-Example',
    component: SwitchExampleComponent,
  },
  {
    path: 'if-example',
    title: 'If-Example',
    component: IfExampleComponent,
  },
  {
    path: 'for-example',
    title: 'For-Example',
    component: ForExampleComponent,
  },
  {
    path: 'logout',
    title: 'Virtual machines service - Logout',
    loadComponent: () =>
      import('./logout/logout.component').then(() => LogoutComponent),
    canActivate: [authGuard],
  },
  {
    path: 'list',
    title: 'Virtual machines list',
    loadComponent: () =>
      import('./vms-list/vms-list.component').then(() => VmsListComponent),
    canActivate: [authGuard],
    canMatch: [randomGuard],
    resolve: [dataResolver],
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./vms-details/vms-details.routes').then(() => VMS_DETAILS_ROUTES),
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
