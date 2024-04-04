import { Component } from '@angular/core';
import { VmsLogsComponent } from './vms-logs/vms-logs.component';
import { VmsResourceUsageComponent } from './vms-resource-usage/vms-resource-usage.component';
import { VmsResourceUsageWithSignalsComponent } from './vms-resource-usage-with-signals/vms-resource-usage-with-signals.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-vms-dashboard',
  standalone: true,
  imports: [VmsLogsComponent, VmsResourceUsageComponent, VmsResourceUsageWithSignalsComponent, MatProgressSpinnerModule],
  templateUrl: './vms-dashboard.component.html',
  styleUrl: './vms-dashboard.component.scss'
})
export class VmsDashboardComponent {

}
