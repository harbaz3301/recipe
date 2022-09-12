import { ThisReceiver } from '@angular/compiler';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private rr: recipeService) { }
  ngOnInit(): void {
  }

  onAddtoShoppingList(){
    this.rr.addIngTOList(this.recipe.ingredient);
  }
}
