import {Recipe} from "../recipebook/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "./ingredient.model";
import {Http} from "@angular/http";
import {DataStorageService} from "./data-storage.service";
/**
 * Created by Nandeesh Patel on 7/6/2017.
 */
@Injectable()
export class RecipeService{
  private recipeList: Recipe[] = [];
  public recipeAdded = new EventEmitter<Recipe>();

  constructor(){
    this.recipeList.push(new Recipe('Poha',
      'An Indian food item made from rice flakes.',
      'http://images.mapsofindia.com/my-india/poha-2.jpg',
      [
        new Ingredient('Poha',1),
        new Ingredient('Onion',2),
        new Ingredient('Pototoes',4),
        new Ingredient('Garlic',1),
        new Ingredient('Chilly',2)
      ]
    ));
    this.recipeList.push(new Recipe("Roti",
      'Bread made from wheat flore/Maida',
      'https://chilliwackartscouncil.com/wp-content/uploads/2016/05/Roti.jpg',
      [
        new Ingredient('Atta',1),
        new Ingredient('Oil',1),
        new Ingredient('Ghee',1),
        new Ingredient('Water',1),
        new Ingredient('Maida',1)
      ]
    ));
  }

  get RecipeList(){
    return this.recipeList.slice();
  }

  setRecipeList(recipeList: Recipe[]){
    this.recipeList = recipeList;
    this.recipeAdded.emit();
  }

  getRecipe(index: number){
    return this.recipeList[index];
  }

  addRecipe(recipe: Recipe){
    this.recipeList.push(recipe);
    this.recipeAdded.emit();
  }

  updateRecipe(index, recipe: Recipe){
    this.recipeList[index] = recipe;
    this.recipeAdded.emit();
  }

  deleteRecipe(index){
    this.recipeList.splice(index,1);
    this.recipeAdded.emit();
  }
}
