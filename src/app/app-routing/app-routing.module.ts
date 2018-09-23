import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "../recipe-book/recipes/recipes.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: "recipes", component: RecipesComponent },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "**", redirectTo: "recipes" }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
