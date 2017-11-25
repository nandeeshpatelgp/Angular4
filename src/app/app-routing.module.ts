/**
 * Created by Nandeesh Patel on 7/20/2017.
 */
import { NgModule } from '@angular/core';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';

import {Routes, RouterModule} from "@angular/router";
import {SelectRecipeComponent} from "./recipebook/select-recipe/select-recipe.component";
import {RecipeEditComponent} from "./recipebook/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path:"", redirectTo: "/recipebook", pathMatch: "full"},
  {path:"recipebook", component: RecipebookComponent, children: [
    {path:"", component: SelectRecipeComponent},
    {path:"new", component: RecipeEditComponent},
    {path:":index", component: RecipeDetailComponent},
    {path:":index/edit", component: RecipeEditComponent}
  ]},
  {path:"shoppinglist", component: ShoppinglistComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule {

}
