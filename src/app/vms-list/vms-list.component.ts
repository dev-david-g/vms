import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContainerComponent } from '../core/container.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-vms-list',
  standalone: true,
  imports: [HttpClientModule, MatTableModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './vms-list.component.html',
  styleUrl: './vms-list.component.scss'
})
export class VmsListComponent extends ContainerComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);
  public virtualMachines: any[] = [];
  public displayedColumns: string[] = ['name', 'lastActivity', 'status', 'actions']

  public ngOnInit(): void {
    this.httpClient.get('/api/virtual-machines')
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe( {
      next: (response: any)=> {this.virtualMachines = response; },
      error: error => {}
    });
  }
}
