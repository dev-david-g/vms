import { Routes } from '@angular/router';
import { VmsDetailsComponent } from './vms-details.component';
import { VmsDetailsViewComponent } from '../vms-details-view/vms-details-view.component';
import { VmsDetailsEditComponent } from '../vms-details-edit/vms-details-edit.component';

export const VMS_DETAILS_ROUTES: Routes = [
    {
        path: '',
        component: VmsDetailsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('../vms-details-view/vms-details-view.component').then(() => VmsDetailsViewComponent)
            },
            {
                path: 'edit',
                loadComponent: () => import('../vms-details-edit/vms-details-edit.component').then(() => VmsDetailsEditComponent)
            },
        ]
    }
]