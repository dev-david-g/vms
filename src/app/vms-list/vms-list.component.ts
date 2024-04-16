import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ContainerComponent } from '../core/container.component';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';
import { Vms } from '../shared/models/vms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-vms-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: './vms-list.component.html',
  styleUrl: './vms-list.component.scss',
})
export class VmsListComponent extends ContainerComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);
  private readonly dialog = inject(MatDialog);
  private authService = inject(AuthService);
  public virtualMachines = signal([]);
  public displayedColumns: string[] = [
    'name',
    'lastActivity',
    'status',
    'actions',
  ];

  isDeleteButtonDisabled!: boolean;

  public ngOnInit(): void {
    this.getVirtualMachines();
  }

  getVirtualMachines() {
    this.httpClient
      .get('/api/virtual-machines')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.virtualMachines.set(response);
        },
        error: (error) => {},
      });
  }

  openAlertDialog(data: Vms) {
    const user = this.authService.getCurrentUser();
    const requiredRoles = ['admin'];
    if (user && requiredRoles && requiredRoles.includes(user.role)) {
      this.isDeleteButtonDisabled = false;
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        data: {
          message: 'Are you sure you want to delete the following item?',
          info: data.name,
          result: data,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.httpClient
            .delete(`api/virtual-machines/${result.id}`)
            .subscribe({
              next: (response: any) => {
                console.log('Virtual machine deleted successfully');
                this.getVirtualMachines();
              },
              error: (error) => {
                console.error('Error deleting virtual machine', error);
              },
            });
        }
      });
    } else {
      this.isDeleteButtonDisabled = true;
    }
  }
}
