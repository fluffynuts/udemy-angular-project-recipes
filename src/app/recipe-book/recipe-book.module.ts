import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { HttpClientModule } from "@angular/common/http";
import { imports as faked } from "../conditional-in-memory-api";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { BsDropdownModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ].concat(faked),
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],
  exports: [RecipesComponent]
})
export class RecipeBookModule {}
