import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Recipe } from "../recipe-book/models/recipe";

const recipes: Recipe[] = [
  { name: "Hamburger", description: "Bun, patty and salad" },
  { name: "Hotdog", description: "Long bun with a weiner and sauce" }
];

@Injectable({
  providedIn: "root"
})
export class InMemoryDataStoreService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): Observable<{}> | {} {
    return {
      recipes
    };
  }

  constructor() { }
}
