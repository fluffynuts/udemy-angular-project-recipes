import { Component, OnInit } from "@angular/core";
import { IngredientService } from "../../shared/ingredient.service";
import { Ingredient } from "../../shared/models/ingredient";
import * as _ from "lodash";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  selectedIngredient = {} as Ingredient;
  get canDelete(): boolean {
    return !!this.selectedIngredient.id;
  }

  get canSave(): boolean {
    return !!(this.selectedIngredient.name || "").trim() &&
      this.selectedIngredient.amount !== undefined;
  }

  constructor(private _ingredientService: IngredientService) {}

  ngOnInit() {
    this._ingredientService.ingredientSelected.subscribe(
      i => (this.selectedIngredient = Ingredient.clone(i))
    );
  }

  save() {
    this._ingredientService.save(this.selectedIngredient);
  }

  clear(): void {
    this.selectedIngredient = {} as Ingredient;
  }

  delete() {
    if (this.selectedIngredient && this.selectedIngredient.id) {
      this._ingredientService.delete(this.selectedIngredient);
    } else {
      console.log("Can't delete: nothing selected");
    }
  }
}
