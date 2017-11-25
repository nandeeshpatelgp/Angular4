import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {RecipeService} from "../../shared/recipe.service";
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;
  @ViewChild("ingName") itemName;
  @ViewChild("ingQty") itemQty;

  constructor(private  activeRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private route: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = params["index"];
        this.editMode = params["index"] !== undefined;
        this.initForm();
      }
    );
  }

  initForm(){
    let recipe = new Recipe('','','',[]);
    if(this.editMode){
      recipe = this.recipeService.getRecipe(this.id);
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipe.name, Validators.required),
      desc: new FormControl(recipe.description, Validators.required),
      imgpath: new FormControl(recipe.imagePath, Validators.required),
      ings: new FormArray([])
    });
    for(let i = 0; i < recipe.ingredients.length; i++){
      (<FormArray>this.recipeForm.get("ings")).push(
        new FormGroup({
          name: new FormControl(recipe.ingredients[i].name,Validators.required),
          qty: new FormControl(recipe.ingredients[i].quantity,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
    }
  }

  deleteItem(index: number){
    (<FormArray>this.recipeForm.get('ings')).removeAt(index);
  }

  onSubmit(){
    console.log(this.editMode);
    let ings = [];
    for(let i = 0; i < this.recipeForm.value['ings'].length; i++){
      ings.push(
        new Ingredient(this.recipeForm.value['ings'][i].name,this.recipeForm.value['ings'][i].qty)
      );
    }
    let recipe: Recipe = new Recipe(this.recipeForm.value['name'],this.recipeForm.value['desc'],this.recipeForm.value['imgpath'],ings);
    if(!this.editMode) {
      this.recipeService.addRecipe(recipe);
      this.id = this.recipeService.RecipeList.length - 1;
    }else {
      this.recipeService.updateRecipe(this.id, recipe);
    }
    this.route.navigate(['recipebook',this.id]);
  }

  addIngredient(){
    const controlGroup = new FormGroup({
      name: new FormControl(null,Validators.required),
      qty: new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray>this.recipeForm.get('ings')).push(controlGroup);
  }
}
