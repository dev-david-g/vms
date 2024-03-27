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
  public changeDetectionRef = inject(ChangeDetectorRef)
  // public id = input.required<number>();

  public ngOnInit(): void {
    setInterval(() => {
        this.changeDetectionRef.markForCheck();  
    }, 1000)
  }
}
