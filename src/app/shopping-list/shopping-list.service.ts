import { EventEmitter } from "@angular/core";
import { ingredients } from "../shared/ingredients.model";

export class ShoppingService{
    ingredientsChanged = new EventEmitter<ingredients[]>();
    ingredients: ingredients[] =[
    new ingredients('apples',5),
    new ingredients('apples',5),
    new ingredients('apples',5)
  ];

  addtoingredient(ings: ingredients){
    this.ingredients.push(ings);
    this.ingredientsChanged.emit(this.ingredients);
    // console.log(this.ingredients);
}
  getingredients()
  {
    // return this.ingredients;
    return this.ingredients;
  }
  addIngredients(ii: ingredients[]){
      this.ingredients.push(...ii);
      this.ingredientsChanged.emit(this.ingredients);
  }
}