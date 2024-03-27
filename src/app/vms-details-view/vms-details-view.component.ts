import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { VmsDetailsResourcesComponent } from '../vms-details-resources/vms-details-resources.component';

@Component({
  selector: 'app-vms-details-view',
  standalone: true,
  imports: [VmsDetailsResourcesComponent],
  templateUrl: './vms-details-view.component.html',
  styleUrl: './vms-details-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VmsDetailsViewComponent implements OnInit {
  public id = 10;

  public ngOnInit(): void {
    setInterval(() => {this.id = this.id + 10;}, 1000)
  }
}
