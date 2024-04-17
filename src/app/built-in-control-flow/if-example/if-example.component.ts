import { Component } from '@angular/core';

@Component({
  selector: 'app-if-example',
  standalone: true,
  imports: [],
  templateUrl: './if-example.component.html',
  styleUrl: './if-example.component.scss',
})
export class IfExampleComponent {
  virtualMachine = 'VmOne';
  descVmOne =
    'VmOne data';
  descVmTwo =
    'VmTwo data';
  descVmThree =
    'VmThree data';
  
  setVirtualMachine(virtualMachine: 'VmOne' | 'VmTwo' | 'VmThree') {
    this.virtualMachine = virtualMachine;
  }
}
