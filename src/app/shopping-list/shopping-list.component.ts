import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  // ingredients: ingredients[] =[
  //   new ingredients('apples',5),
  //   new ingredients('apples',5)
  // ];
  ingredients: ingredients[] = [];
  constructor(private ing: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.ing.getingredients();
    this.ing.ingredientsChanged.subscribe(
      (ingredient: ingredients[]) =>
        this.ingredients = ingredient
      
    );
  }

  // onIngredientAdded(ing: ingredients)
  // {
  //   this.ingredients.push(ing);
  // }
}
