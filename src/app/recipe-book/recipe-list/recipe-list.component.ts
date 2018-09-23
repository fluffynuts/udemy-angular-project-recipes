import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe";
import { Observable } from "rxjs";
import { RecipeRepositoryService } from "src/app/shared/recipe-repository.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  public selectedRecipe: Recipe;
  public recipes$: Observable<Recipe[]>;

  constructor(private _recipeRepository: RecipeRepositoryService) {
  }

  ngOnInit() {
    this.refreshRecipes();
  }

  public refreshRecipes() {
    this.recipes$ = this._recipeRepository.fetchAll();
  }

}
