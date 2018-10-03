import { Component, OnInit } from "@angular/core";
import { IngredientService } from "../../shared/ingredient.service";
import { Observable } from "rxjs";
import { Ingredient } from "src/app/shared/models/ingredient";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;
  ingredients: Ingredient[];

  constructor(
    private _ingredientRepository: IngredientService
  ) { }

  ngOnInit() {
    this.refreshData();
    this._ingredientRepository.ingredientAdded.subscribe(
      () => this.refreshData()
    );
    this._ingredientRepository.ingredientDeleted.subscribe(
      () => this.refreshData()
    );
  }

  async refreshData(): Promise<void> {
    this.ingredients$ = this._ingredientRepository.fetchAll();
  }

  selectIngredient(ingredient: Ingredient) {
    this._ingredientRepository.selectIngredient(ingredient);
  }

}
