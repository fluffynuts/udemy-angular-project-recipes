import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRepository } from "./repository";
import { Ingredient } from "./models/ingredient";
import { Observable } from "rxjs";
import { EndpointsService } from "./endpoints.service";

@Injectable({
  providedIn: "root"
})
export class IngredientRepositoryService implements IRepository<Ingredient> {
  constructor(
    private _httpClient: HttpClient,
    private _endpoints: EndpointsService) { }


  fetchAll(): Observable<Ingredient[]> {
    return this._httpClient.get<Ingredient[]>(
      this._endpoints.resolve("ingredients")
    );
  }

}
