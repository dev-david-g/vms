import { Component } from '@angular/core';

@Component({
  selector: 'app-for-example',
  standalone: true,
  imports: [],
  templateUrl: './for-example.component.html',
  styleUrl: './for-example.component.scss',
})
export class ForExampleComponent {
  items: string[] = [];

  generateItems() {
    this.items = [
      'Bulgaria',
      'Romania',
      'Italy',
      'Finland',
      'Austria',
      'Norway',
      'Germany',
    ];
  }

  removeItems() {
    this.items = [];
  }
}
