import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../models/recipe";
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe() {
    this._recipeService.recipeSelected.emit(this.recipe);
  }

}
