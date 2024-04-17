import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  standalone: true,
  imports: [],
  templateUrl: './switch-example.component.html',
  styleUrl: './switch-example.component.scss',
})
export class SwitchExampleComponent {
  virtualMachine = 'VmOne';
  descVmOne =
    'VmOne data';
  descVmTwo =
    'VmTwo data';
  descVmThree =
    'VmThree data';

  setVirtualMachine(virtualMachine: 'VmOne' | 'VmTwo' | 'VmThree' | 'Default') {
    this.virtualMachine = virtualMachine;
  }
}
