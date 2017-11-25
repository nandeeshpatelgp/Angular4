import {Ingredient} from "../shared/ingredient.model";
/**
 * Created by Nandeesh Patel on 7/2/2017.
 */
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, path: string, ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingredients = ingredients;
  }
}
