import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
  AppModule,
  // this option has been made false by default in angular 6
  // and results in no spacing between, for example, bootstrap buttons
  { preserveWhitespaces: true }
  ).catch(err => console.log(err));
