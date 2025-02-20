import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Provider } from '@angular/core';

const routerProviders: Provider[] = ([] as Provider[]).concat(provideRouter(routes) as any);
const httpProviders: Provider[] = ([] as Provider[]).concat(provideHttpClient(withInterceptorsFromDi()) as any);

renderApplication(() => bootstrapApplication(AppComponent), {
  document: '<app-root></app-root>',
  url: '/',
  platformProviders: [
    ...routerProviders,
    ...httpProviders
  ]
}).catch(err => console.error(err));

export default {};