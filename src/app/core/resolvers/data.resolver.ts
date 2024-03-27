import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';

export const dataResolver: ResolveFn<Observable<any>> = (route, state) => {
  console.log('data resolver');
  const httpClient = inject(HttpClient);
  return httpClient.get('/api/virtual-machines');
};
