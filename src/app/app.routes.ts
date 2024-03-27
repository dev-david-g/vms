import { Routes } from '@angular/router';
import { VmsListComponent } from './vms-list/vms-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
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
