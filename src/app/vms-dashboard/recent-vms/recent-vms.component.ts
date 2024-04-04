import { Component, OnInit, inject, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ContainerComponent } from '../../core/container.component';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-recent-vms',
  standalone: true,
  imports: [MatTableModule, MatProgressSpinnerModule],
  templateUrl: './recent-vms.component.html',
  styleUrl: './recent-vms.component.scss'
})
export class RecentVmsComponent extends ContainerComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);

  public virtualMachines = signal([]);
  public displayedColumns: string[] = [
    'name',
    'lastActivity',
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
          // this.virtualMachines = response.sort((a: any, b: any) => a.lastActivity > b.lastActivity ? -1 : 1);
          this.virtualMachines.update((vms: any) => vms = response.sort((a: any, b: any) => a.lastActivity > b.lastActivity ? -1 : 1).slice(0, 3)
          );
          console.log(this.virtualMachines);
        },
        error: (error) => { },
      });
  }
}
