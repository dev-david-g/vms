import { Routes } from '@angular/router';
import { VmsListComponent } from './vms-list/vms-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Virtual machines service - Login',
        component: LoginComponent
    },
    {
        path: 'logout',
        title: 'Virtual machines service - Logout',
        loadComponent: () => import('./logout/logout.component').then(() => LogoutComponent)
    },
    {
        path: 'list',
        title: 'Virtual machines list',
        loadComponent: () => import('./vms-list/vms-list.component').then(() => VmsListComponent)
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: 'Page not found',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(() => PageNotFoundComponent)
    }
];
