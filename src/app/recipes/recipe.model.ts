import { ingredients } from "../shared/ingredients.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: ingredients[];
    constructor(name: string, desc: string, imagePath: string, ingredients: ingredients[] )
    {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredients;
    }
}