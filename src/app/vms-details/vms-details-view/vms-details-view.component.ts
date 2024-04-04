import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  inject,
  signal
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vms } from '../../shared/models/vms';
import { VmsService } from '../../shared/vms/vms.service';
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
  private vmsService = inject(VmsService);
  private route = inject(ActivatedRoute);
  public usedRamSignal = signal(1024);
  private readonly ramSizes = [512, 1024, 2048, 8000];
  private usedRam = 1024;
  vmId!: number;
  vm!: Vms;
  vmSignal = signal(this.vm);

  constructor() {
    effect(() => {
      console.log(
        'primitive: ' + this.usedRam + ' and signal: ' + this.usedRamSignal()
      );
    });
  }

  public ngOnInit(): void {
    this.vmId = Number(this.route.snapshot.paramMap.get('id')!);
    this.vmsService.getVmById(this.vmId).subscribe((result) => {
      this.vmSignal.set(result);
    });
    setInterval(() => {
      this.usedRam = this.ramSizes[Math.floor(Math.random() * 4)];
      this.usedRamSignal.set(this.usedRam);
      console.log('primitive: ' + this.usedRam);
    }, 1000);
  }
}
