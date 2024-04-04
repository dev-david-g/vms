import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
    catchError,
    EMPTY,
    map,
    Observable,
    shareReplay
} from 'rxjs';
import { ContainerComponent } from '../../core/container.component';
import { Vms } from '../models/vms';

@Injectable({
  providedIn: 'root',
})
export class VmsService extends ContainerComponent {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'api/virtual-machines';
  private vms: Vms[] = [];
  private vm!: Vms;

  getVmById(id: number): Observable<Vms> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Vms>(url).pipe(
      catchError((err) => {
        console.error(err);
        return EMPTY;
      })
    );
  }

  private virtualMachines$ = this.httpClient.get<Vms[]>(this.apiUrl).pipe(
    map((result) => (this.vms = result)),
    shareReplay(1),
    catchError((err) => {
      console.error(err);
      return EMPTY;
    }),
    takeUntilDestroyed(this.destroyRef)
  );

  vmsSignal = toSignal<Vms[], Vms[]>(this.virtualMachines$, {
    initialValue: [],
  });
}
