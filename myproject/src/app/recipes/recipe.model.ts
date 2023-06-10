import { Ingredient } from "../sharedfiles/ingredient.model";

export class Recipe{
    public name:string;
    public description: string;
    public imagelocation:string;
    public ingredients : Ingredient[];

    constructor(name:string, desc:string , imagelocation: string , ingredients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagelocation=imagelocation;
        this.ingredients= ingredients;
    }
}