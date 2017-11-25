import {Ingredient} from "./ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";
/**
 * Created by Nandeesh Patel on 7/6/2017.
 */

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<any>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[]  = [
    new Ingredient('Poha',5),
    new Ingredient('Oil',2),
    new Ingredient('Tomatoes',2)
  ];

  get Ingredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing){
    this.ingredients.push(new Ingredient(ing.name,ing.quantity));
    this.ingredientsChanged.emit();
  }

  clearIngredientsList(){
    this.ingredients.splice(0,this.ingredients.length);
    this.ingredientsChanged.emit();
  }

  getIngredient(index: number){
    return this.Ingredients[index];
  }

  editIngredient(index:number, name: string, qty: number){
    this.ingredients[index] = new Ingredient(name,qty);
    this.ingredientsChanged.emit();
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.emit();
  }
}
