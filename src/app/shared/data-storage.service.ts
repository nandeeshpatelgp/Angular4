
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "./recipe.service";
import "rxjs/Rx";
import {Recipe} from "../recipebook/recipe.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService){

  }

  onSaveData(){
    return this.http.put("https://ng-recipe-book-9ca32.firebaseio.com/recipeList.json",this.recipeService.RecipeList);
  }

  onFetchData(){
    return this.http.get("https://ng-recipe-book-9ca32.firebaseio.com/recipeList.json").subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipeList(recipes);
      }
    );
  }

  fetchData(): Observable<Recipe[]> {
    return this.http.get("https://ng-recipe-book-9ca32.firebaseio.com/recipeList.json")
      .map((response) => {
        let body = response.json();
        return body;
      });
  }
}
