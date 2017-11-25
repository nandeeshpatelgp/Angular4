import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "../shared/shoppinglist.service";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[]  = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.Ingredients;
    this.shoppingListService.ingredientsChanged.subscribe(() => {
      this.ingredients = this.shoppingListService.Ingredients;
    });
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }
}
