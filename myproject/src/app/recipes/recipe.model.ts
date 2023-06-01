export class Recipe{
    public name:string;
    public description: string;
    public imagelocation:string;

    constructor(name:string, desc:string , imagelocation: string){
        this.name=name;
        this.description=desc;
        this.imagelocation=imagelocation;
    }
}