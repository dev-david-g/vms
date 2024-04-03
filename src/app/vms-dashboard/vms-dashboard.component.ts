import { Component } from '@angular/core';
import { VmsLogsComponent } from './vms-logs/vms-logs.component';

@Component({
  selector: 'app-vms-dashboard',
  standalone: true,
  imports: [VmsLogsComponent],
  templateUrl: './vms-dashboard.component.html',
  styleUrl: './vms-dashboard.component.scss'
})
export class VmsDashboardComponent {

}
