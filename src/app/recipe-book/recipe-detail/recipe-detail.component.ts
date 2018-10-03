import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../models/recipe";
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.recipeSelected.subscribe(r => this.recipe = r);
  }

}
