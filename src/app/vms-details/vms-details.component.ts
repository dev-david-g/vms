import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterOutlet, provideRouter } from '@angular/router';

@Component({
  selector: 'app-vms-details',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './vms-details.component.html',
  styleUrl: './vms-details.component.scss'
})
export class VmsDetailsComponent implements OnInit {
  public vmId: number = 0; 
  
   public ngOnInit(): void {
  }
}
