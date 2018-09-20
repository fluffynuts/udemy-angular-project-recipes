import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Recipe } from "../recipe-book/models/recipe";

function R(name: string, description: string, imagePath?: string) {
  return new Recipe(name, description, imagePath);
}

const recipes: Recipe[] = [
  R("Hamburger", "Bun, patty and salad",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/250px-Hamburger_%28black_bg%29.jpg"),
  R("Hotdog", "Long bun with a weiner and sauce",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/220px-Hot_dog_with_mustard.png"),
  R("In Progress", "This recipe is still being created...")
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
