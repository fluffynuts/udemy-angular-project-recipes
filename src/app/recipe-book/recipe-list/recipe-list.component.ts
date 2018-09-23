import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../models/recipe";
import { Observable } from "rxjs";
import { RecipeRepositoryService } from "src/app/shared/recipe-repository.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;
  public recipes: Recipe[];
  @Output() public recipeItemSelected = new EventEmitter<Recipe>();

  constructor(private _recipeRepository: RecipeRepositoryService) {
  }

  ngOnInit() {
    this.refreshRecipes();
  }

  public refreshRecipes() {
    this.recipes$ = this._recipeRepository.fetchAll();
    this.recipes$.subscribe(r => {
      this.recipes = r;
      console.log(`have ${this.recipes.length} recipes`);
    });
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }

}
