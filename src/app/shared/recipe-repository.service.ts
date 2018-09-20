import { Injectable } from "@angular/core";
import { EndpointsService } from "./endpoints.service";
import { Recipe } from "../recipe-book/models/recipe";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IRepository } from "./repository";

@Injectable({
  providedIn: "root"
})
export class RecipeRepositoryService implements IRepository<Recipe> {

  constructor(private _httpClient: HttpClient,
              private _endpoints: EndpointsService) { }

  fetchAll(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(
      this._endpoints.resolve("recipes")
    );
  }

}
