import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipebook/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { DropdownToggleDirective } from './shared/dropdown-toggle.directive';
import {RecipeService} from "./shared/recipe.service";
import {ShoppingListService} from "./shared/shoppinglist.service";
import {AppRountingModule} from "app/app-routing.module";
import { SelectRecipeComponent } from './recipebook/select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipebook/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    RecipebookComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownToggleDirective,
    SelectRecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRountingModule,
    HttpModule
  ],
  providers: [ RecipeService, ShoppingListService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
