import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { loggingInterceptor } from './core/logging.interceptor';
import { httpErrorInterceptor } from './core/error.interceptor';
import { LoggingInterceptor } from './core-old/logging-old.interceptor';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideRouter(routes),
      provideAnimationsAsync(),
      provideHttpClient(
        withFetch(), // more modern API to make requests than XMLHttpRequest
        withInterceptors([loggingInterceptor, httpErrorInterceptor]), // define list of interceptors
        withInterceptorsFromDi(), // allow to import interceptors using DI
      ),
      { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
    ]
};
