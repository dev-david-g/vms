import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ContainerComponent } from '../../core/container.component';
import { LogsService } from '../../shared/logs-service/logs.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-vms-logs',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './vms-logs.component.html',
  styleUrl: './vms-logs.component.scss',
})
export class VmsLogsComponent extends ContainerComponent {
  private readonly logsService = inject(LogsService);
  errorMessage = '';

  logs = computed(() => {
    try {
      return this.logsService.logsSignal();
    } catch (error) {
      this.errorMessage = typeof error === 'string' ? error : 'Error';
      return [];
    }
  });
}
