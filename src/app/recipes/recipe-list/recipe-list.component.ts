import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('a Test REcipe','skdfjldfjsf','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg'),
  //   new Recipe('b Test REcipe','skdfjldfjsf','https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
  // ];
  recipes: Recipe[] =[];
  constructor(private reci: recipeService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.recipes = this.reci.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);
  // }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route} )
  }
}
