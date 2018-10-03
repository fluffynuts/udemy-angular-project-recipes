import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { RecipeBookModule } from "./recipe-book/recipe-book.module";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { imports as fakes } from "./conditional-in-memory-api";
import { CollapseModule, BsDropdownModule } from "ngx-bootstrap";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { DropDownToggleDirective } from "./drop-down-toggle.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownToggleDirective,
  ],
  imports: [
    ShoppingListModule,
    RecipeBookModule,
    AppRoutingModule,

    CommonModule,
    BrowserModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ].concat(fakes),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
