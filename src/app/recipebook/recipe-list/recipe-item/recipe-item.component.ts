import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../../shared/recipe.service";
import {Subscription} from "rxjs/Subscription";
import {DataStorageService} from "../../../shared/data-storage.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnDestroy {

  recipeList: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private dataservice: DataStorageService) {
  }

  ngOnInit() {
    this.recipeList = this.recipeService.RecipeList;
    this.subscription = this.recipeService.recipeAdded.subscribe(() => {
      this.recipeList = this.recipeService.RecipeList;
    });
    this.dataservice.fetchData().subscribe((data) => {
        console.log(data);
      },
      (error)=>{
        console.log(error);
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
