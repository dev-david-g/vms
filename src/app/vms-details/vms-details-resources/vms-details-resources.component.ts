import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { Vms } from '../../shared/models/vms';
import { VmsService } from '../../shared/vms/vms.service';

@Component({
  selector: 'app-vms-details-resources',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vms-details-resources.component.html',
  styleUrl: './vms-details-resources.component.scss',
})
export class VmsDetailsResourcesComponent implements OnInit {
  vm = input.required<Vms>();
  vmChange = output<string>();

  public changeDetectionRef = inject(ChangeDetectorRef);

  public usedRam = input.required<number>();

  public ngOnInit(): void {
    this.vmChange.emit('value');
    // setInterval(() => {
    //    this.changeDetectionRef.markForCheck();
    // }, 3000);
  }
}
