import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, empty, map, shareReplay } from 'rxjs';
import { ContainerComponent } from '../../core/container.component';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LogsService extends ContainerComponent {
  private readonly httpClient = inject(HttpClient);
  private url = 'api/logs';
  private logs: Log[] = [];

  private logs$ = this.httpClient.get<Log[]>(this.url).pipe(
    map((result) => (this.logs = result)),
    shareReplay(1),
    catchError((err) => {
      console.error(err);
      return EMPTY;
    }),
    takeUntilDestroyed(this.destroyRef)
  );

  logsSignal = toSignal<Log[], Log[]>(this.logs$, { initialValue: [] });
}
