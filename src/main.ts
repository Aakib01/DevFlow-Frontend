import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/appConfig/app.config';
import { App } from './app/appComponent/app';
import { authInterceptor } from './app/pages/interceptors/auth.interceptor';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app/appRoutes/app.routes';

bootstrapApplication(App, {
    providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))  
  ]
});
