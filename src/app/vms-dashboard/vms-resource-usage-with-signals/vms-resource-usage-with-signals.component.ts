import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-vms-resource-usage-with-signals',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressBarModule],
  templateUrl: './vms-resource-usage-with-signals.component.html',
  styleUrl: './vms-resource-usage-with-signals.component.scss'
})
export class VmsResourceUsageWithSignalsComponent {
  public virtualMachine = input<any>(0);

  public maxCPU = 3.40;
  public maxRAM = 2048;
  public maxStorage = 128;

  public usedCPUSignal = signal<number>(0);
  public usedCPUPercentageComputed = computed<number>(() => 100 / this.maxCPU * this.usedCPUSignal());
  public usedRAMSignal = signal<number>(0);
  public usedRAMPercentageComputed = computed(() => 100 / this.maxRAM * this.usedRAMSignal());
  public usedStorageSignal = signal<number>(0);
  public usedStoragePercentageComputed = computed(() =>  100 / this.maxStorage * this.usedStorageSignal());

  private loggingEffect = effect(() => {
    console.log(`${Date.now().toString()}: ${this.usedCPUSignal()}/${this.maxCPU} GHz of CPU,` + 
    `${this.usedRAMSignal()}/${this.maxRAM} MB of RAM,` + 
    `${this.usedStorageSignal()}/${this.maxStorage} GB`);
  });

  public ngOnInit(): void {
    this.calculateValues();
    setInterval(() => { this.calculateValues(); }, 1000);
  }

  private calculateValues(): void {
    this.usedCPUSignal.set(Number((Math.random() * this.maxCPU + 1).toPrecision(2)));
    this.usedRAMSignal.set(Math.floor(Math.random() * this.maxRAM));
    this.usedStorageSignal.set(Math.floor(Math.random() * this.maxStorage));
  }
}
