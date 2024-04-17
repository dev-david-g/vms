import { Component } from '@angular/core';

@Component({
  selector: 'app-for-example',
  standalone: true,
  imports: [],
  templateUrl: './for-example.component.html',
  styleUrl: './for-example.component.scss',
})
export class ForExampleComponent {
  virtualMachines: string[] = [];

  generateItems() {
    this.virtualMachines = [
      'Virtual machine 1',
      'Virtual machine 2',
      'Virtual machine 3',
      'Virtual machine 4',
      'Virtual machine 5',
      'Virtual machine 6',
      'Virtual machine 7',
    ];
  }

  removeItems() {
    this.virtualMachines = [];
  }
}
