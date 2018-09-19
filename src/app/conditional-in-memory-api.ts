import { environment } from "src/environments/environment";
import { CommonModule } from "@angular/common";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataStoreService } from "./shared/in-memory-data-store.service";

export const imports = [];
if (!environment.production) {
  const inMemoryApi = HttpClientInMemoryWebApiModule.forRoot(InMemoryDataStoreService, {
      dataEncapsulation: false
      // fixme: find a better type co-ercion
    }) as any as (typeof CommonModule);
  imports.push(inMemoryApi);
}
// ~2.7.2
