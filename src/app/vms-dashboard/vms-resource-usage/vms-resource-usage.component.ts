import { Component } from '@angular/core';

@Component({
  selector: 'app-vms-resource-usage',
  standalone: true,
  imports: [],
  templateUrl: './vms-resource-usage.component.html',
  styleUrl: './vms-resource-usage.component.scss'
})
export class VmsResourceUsageComponent {
  public maxCPU = 3.40;
  public maxRAM = 2048; 
  public maxStorage = 128; 
}
