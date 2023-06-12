
import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../sharedfiles/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()

export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  
    private   recipes : Recipe[]= [
        new Recipe('Biryani','A heavenly blend of fragrant basmati rice, aromatic spices, and tender meats, cooked to perfection in a harmonious fusion of flavors.','https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        [
          new Ingredient( 'Rice in scoops' , 4),
          new Ingredient( 'Chicken pieces' , 5)
        ]),
        new Recipe('Luchi with Aloo Dum','Deep-fried puffed bread served with a spicy potato curry, a classic combination for breakfast or special occasions.','https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Breakfast_-_Kochuri%2C_Aloo.jpg/1600px-Breakfast_-_Kochuri%2C_Aloo.jpg?20221126161712',
        [
          new Ingredient( 'Deep-fried puffed bread' , 5),
          new Ingredient( 'Potato pieces' , 3)
        ])
         
];

      // private recipes: Recipe[]=[];
      
      constructor(private slService : ShoppingListService){}

      setRecipes(recipes: Recipe[]){
        this.recipes= recipes;
        this.recipesChanged.next(this.recipes.slice());
      }



      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index : number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList ( ingredients : Ingredient[]){

        this.slService.addIngredients(ingredients);

      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

      }
      updateRecipe( index : number , newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}