import { Component } from '@angular/core';
import { VmsLogsComponent } from './vms-logs/vms-logs.component';
import { VmsResourceUsageComponent } from './vms-resource-usage/vms-resource-usage.component';
import { VmsResourceUsageWithSignalsComponent } from './vms-resource-usage-with-signals/vms-resource-usage-with-signals.component';

@Component({
  selector: 'app-vms-dashboard',
  standalone: true,
  imports: [VmsLogsComponent, VmsResourceUsageComponent, VmsResourceUsageWithSignalsComponent],
  templateUrl: './vms-dashboard.component.html',
  styleUrl: './vms-dashboard.component.scss'
})
export class VmsDashboardComponent {

}
