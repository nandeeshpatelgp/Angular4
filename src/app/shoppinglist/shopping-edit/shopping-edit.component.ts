import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../shared/shoppinglist.service";
import {FormsModule, NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  index:number;
  @ViewChild("form") form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.index = index;
      var ing = this.shoppingListService.getIngredient(index);
      this.form.form.patchValue({
        name: ing.name,
        quantity: ing.quantity
      });
    });
  }

  addIngredient(form: NgForm){
    var value = form.value;
    if(this.editMode){
      this.shoppingListService.editIngredient(this.index, value.name, value.quantity);
      this.editMode = false;
    }else{
      this.shoppingListService.addIngredient({
        name: value.name,
        quantity: value.quantity
      });
    }
    this.form.reset();
  }

  deleteItem(){
    this.shoppingListService.deleteIngredient(this.index);
    this.resetForm();
  }

  resetForm(){
    this.form.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
