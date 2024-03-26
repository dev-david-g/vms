import { Routes } from '@angular/router';
import { VmsListComponent } from './vms-list/vms-list.component';

export const routes: Routes = [
    {
        path: 'list',
        loadComponent: () => import('./vms-list/vms-list.component').then(() => VmsListComponent)
    }
];
