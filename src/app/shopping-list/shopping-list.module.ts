import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
