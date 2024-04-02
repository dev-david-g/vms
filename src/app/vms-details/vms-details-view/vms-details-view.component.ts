import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
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
  public id = 10;
  public usedRamSignal = signal(1024);
  public readonly ramSizes = [512, 1024, 2048, 8000];

  public ngOnInit(): void {
    setInterval(() => {
      this.id = this.id + 10;
      this.usedRamSignal.set(this.ramSizes[Math.floor(Math.random() * 4)]);
      console.log('used RAM: ' + this.usedRamSignal() + ' and id: ' + this.id);
    }, 1000)
  }
}
