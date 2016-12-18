// implements browsers features if not natively present
import 'angular2-meteor-polyfills';

// Angular2 standard App Bootstrapping
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './imports/app/app.module';

/* - - - IMPORTS - - - */

platformBrowserDynamic().bootstrapModule(AppModule);
