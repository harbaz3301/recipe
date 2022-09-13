import { ThisReceiver } from '@angular/compiler';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private rr: recipeService,
              private router: Router,
              private route: ActivatedRoute
              ) { }
  ngOnInit(): void {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.rr.getRecipe(this.id);
      }
    );
  }
  onAddtoShoppingList(){
    // this.rr.addIngTOList(this.recipe.ingredient);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route} )
    // this.router.navigate(['../', this.id, 'edit' ],{relativeTo: this.route} )
  }
}
