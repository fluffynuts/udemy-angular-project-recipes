import { Component, OnInit } from "@angular/core";
import { IngredientRepositoryService } from "../../shared/ingredient-repository.service";
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
    private _ingredientRepository: IngredientRepositoryService
  ) { }

  ngOnInit() {
    this.refreshData();
  }

  async refreshData(): Promise<void> {
    this.ingredients$ = this._ingredientRepository.fetchAll();
    this.ingredients = await this._ingredientRepository.fetchAll().toPromise();
  }

}
