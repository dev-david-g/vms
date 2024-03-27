import { ChangeDetectorRef, ChangeDetectionStrategy, Component, Input, OnInit, inject, input } from '@angular/core';

@Component({
  selector: 'app-vms-details-resources',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './vms-details-resources.component.html',
  styleUrl: './vms-details-resources.component.scss',
})
export class VmsDetailsResourcesComponent implements OnInit  {
  @Input() vmid: number = 0;
  public usedRam = input.required<number>();

  public changeDetectionRef = inject(ChangeDetectorRef)

  public ngOnInit(): void {
    //setInterval(() => {
     //   this.changeDetectionRef.markForCheck();  
    // }, 3000);
  }
}
