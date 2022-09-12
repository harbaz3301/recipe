import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[recipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe
  constructor(private rs: recipeService ) { }

  ngOnInit(): void {
    this.rs.recipesSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  // setRecipe(recipe: Recipe){
  //   // console.log(recipe);
  //   this.selectedRecipe = recipe;
  //   // console.log(this.selectedRecipe);
  // }
}
