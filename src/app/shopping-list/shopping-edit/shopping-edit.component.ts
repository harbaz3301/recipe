import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<ingredients>();
  constructor(private ingl: ShoppingService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredients(ingName,ingamount);
    // this.ingredientAdded.emit(newIngredient);
    this.ingl.addtoingredient(newIngredient);
    // console.log(newIngredient);
  }
}
