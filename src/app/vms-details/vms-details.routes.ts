import { Routes } from '@angular/router';
import { VmsDetailsEditComponent } from './vms-details-edit/vms-details-edit.component';
import { VmsDetailsViewComponent } from './vms-details-view/vms-details-view.component';
import { VmsDetailsComponent } from './vms-details.component';
import { childRouteGuard } from '../core/guards/child-route.guard';

export const VMS_DETAILS_ROUTES: Routes = [
    {
        path: '',
        component: VmsDetailsComponent,
        canActivateChild: [childRouteGuard],
        data: {roles: ['admin']},
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./vms-details-view/vms-details-view.component').then(() => VmsDetailsViewComponent)
            },
            {
                path: 'edit',
                loadComponent: () => import('./vms-details-edit/vms-details-edit.component').then(() => VmsDetailsEditComponent)
            },
        ]
    }
]