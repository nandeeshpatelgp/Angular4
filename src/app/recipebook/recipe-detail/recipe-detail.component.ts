import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shared/shoppinglist.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../shared/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  id: number;
  constructor(private shoppingListService: ShoppingListService,
  private activeRoute: ActivatedRoute,
  private recipeService: RecipeService,
  private route: Router) {}

  addIngredientsToList(){
    for(let i = 0; i < this.recipe.ingredients.length; i++){
      this.shoppingListService.addIngredient(this.recipe.ingredients[i]);
    }
  }

  ngOnInit(){
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(
          +params["index"]
        );
        this.id = +params["index"];
      }
    );
  }

  onRecipeEdit(){
    this.route.navigate(["edit"],{
      relativeTo: this.activeRoute
    });
  }

  onRecipeDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['../']);
  }
}
