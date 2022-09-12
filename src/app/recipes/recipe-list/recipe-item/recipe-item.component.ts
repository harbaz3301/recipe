import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() Recipes!: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private reci: recipeService) { }

  onSelected()
  {
    // this.recipeSelected.emit();
    this.reci.recipesSelected.emit(this.Recipes)
  }
  ngOnInit(): void {

  }

}
