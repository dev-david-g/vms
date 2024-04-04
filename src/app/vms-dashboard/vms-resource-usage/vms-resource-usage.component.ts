import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-vms-resource-usage',
  standalone: true,
  imports: [MatProgressBarModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vms-resource-usage.component.html',
  styleUrl: './vms-resource-usage.component.scss'
})
export class VmsResourceUsageComponent {
  public maxCPU = 3.40;
  public maxRAM = 2048;
  public maxStorage = 128;
  public usedCPU: number = 0;
  public usedCPUPercentage: number = 0;
  public usedRAM: number = 0;
  public usedRAMPercentage = 0;
  public usedStorage: number = 0;
  public usedStoragePercentage: number = 0;

 public changeDetectionRef = inject(ChangeDetectorRef);

  public ngOnInit(): void {

    this.calculateValues();

    setInterval(() => { this.calculateValues(); 
     // this.changeDetectionRef.markForCheck(); 
    }, 1000);
  }

  private calculateValues(): void {
    this.usedCPU = Number((Math.random() * this.maxCPU + 1).toPrecision(2));
    this.usedCPUPercentage = 100 / this.maxCPU * this.usedCPU;
    this.usedRAM = Math.floor(Math.random() * this.maxRAM);
    this.usedRAMPercentage = 100 / this.maxRAM * this.usedRAM;
    this.usedStorage = Math.floor(Math.random() * this.maxStorage);
    this.usedStoragePercentage = 100 / this.maxStorage * this.usedStorage;
  }
}
