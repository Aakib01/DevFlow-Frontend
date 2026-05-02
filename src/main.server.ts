import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/appComponent/app';
import { config } from './app/appConfig/app.config.server';
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
