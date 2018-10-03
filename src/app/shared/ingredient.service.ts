import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRepository } from "./repository";
import { Ingredient } from "./models/ingredient";
import { Observable } from "rxjs";
import { EndpointsService } from "./endpoints.service";

@Injectable({
  providedIn: "root"
})
export class IngredientService implements IRepository<Ingredient> {
  ingredientAdded = new EventEmitter<Ingredient>();
  ingredientDeleted = new EventEmitter<Ingredient>();
  ingredientSelected = new EventEmitter<Ingredient>();

  private get _endpoint() {
    return this._endpoints.resolve("ingredients");
  }
  constructor(
    private _httpClient: HttpClient,
    private _endpoints: EndpointsService) { }


  fetchAll(): Observable<Ingredient[]> {
    return this._httpClient.get<Ingredient[]>(
      this._endpoint
    );
  }

  save(ingredient: Ingredient) {
    if (ingredient.id === undefined) {
      ingredient = new Ingredient(ingredient.name, ingredient.amount);
    }
    this._httpClient.put<Ingredient>(
      this._endpoint,
      ingredient)
    .subscribe(r => {
      this.ingredientAdded.emit(r);
    });
  }

  selectIngredient(ingredient: Ingredient): void {
    this.ingredientSelected.emit(ingredient);
  }

  async delete(ingredient: Ingredient) {
    await this._httpClient.delete<Ingredient>(`${this._endpoint}/${ingredient.id}`);
    this.ingredientDeleted.emit(ingredient);
  }
}
