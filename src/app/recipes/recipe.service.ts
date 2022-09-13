import { EventEmitter, Injectable } from "@angular/core";
import { ingredients } from "../shared/ingredients.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class recipeService{
    recipesSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
    new Recipe(
    'a Test REcipe',
    'skdfjldfjsf',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg',
    [
      new ingredients('apple',1),
      new ingredients('juice',1)
    ]
    ),
    new Recipe(
      'b Test REcipe',
      'skdfjldfjsf',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      [
        new ingredients('apple',1),
        new ingredients('juice',1)
      ])
  ];
  constructor(private slService: ShoppingService){}
  getRecipes(){
    return this.recipes.slice();
  }

  addIngTOList(ingredient: ingredients[]){
    this.slService.addIngredients(ingredient);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
}