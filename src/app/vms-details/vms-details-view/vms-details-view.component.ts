import { ChangeDetectionStrategy, Component, OnInit, effect, signal } from '@angular/core';
import { VmsDetailsResourcesComponent } from '../vms-details-resources/vms-details-resources.component';

@Component({
  selector: 'app-vms-details-view',
  standalone: true,
  imports: [VmsDetailsResourcesComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vms-details-view.component.html',
  styleUrl: './vms-details-view.component.scss',
})
export class VmsDetailsViewComponent implements OnInit {
  public usedRamSignal = signal(1024);
  private readonly ramSizes = [512, 1024, 2048, 8000];
  private usedRam = 1024;

  constructor() {

    effect(()=> {
      console.log('primitive: ' + this.usedRam + ' and signal: ' + this.usedRamSignal());
    });
  }

  public ngOnInit(): void {
    setInterval(() => {
     this.usedRam = this.ramSizes[Math.floor(Math.random() * 4)];
    // this.usedRamSignal.set(this.usedRam);
     console.log('primitive: ' + this.usedRam);
    }, 1000)
  }
}
