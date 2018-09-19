import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
