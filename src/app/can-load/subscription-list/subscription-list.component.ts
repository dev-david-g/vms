import { Component } from '@angular/core';
import { SubscriptionTypeComponent } from './subscription-type/subscription-type.component';

@Component({
  selector: 'app-subscription-list',
  standalone: true,
  imports: [SubscriptionTypeComponent],
  templateUrl: './subscription-list.component.html',
  styleUrl: './subscription-list.component.scss'
})
export class SubscriptionListComponent {

}
