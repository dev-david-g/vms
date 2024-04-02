import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ContainerComponent } from '../core/container.component';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';
import { Vms } from '../shared/models/vms';

@Component({
  selector: 'app-vms-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './vms-list.component.html',
  styleUrl: './vms-list.component.scss',
})
export class VmsListComponent extends ContainerComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);
  private readonly dialog = inject(MatDialog);
  public virtualMachines: any[] = [];
  public displayedColumns: string[] = [
    'name',
    'lastActivity',
    'status',
    'actions',
  ];

  public ngOnInit(): void {
    this.getVirtualMachines();
  }

  getVirtualMachines() {
    this.httpClient
      .get('/api/virtual-machines')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.virtualMachines = response;
          console.log(this.virtualMachines);
        },
        error: (error) => {},
      });
  }

  openAlertDialog(data: Vms) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'Are you sure you want to delete the following item?',
        info: data.name,
        result: data,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.httpClient.delete(`api/virtual-machines/${result.id}`).subscribe({
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
  }
}
