import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]= [
    new Recipe('Biryani','Classic bengali dish','https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
  ];
  constructor(){

  }
  ngOnInit(): void {
      
  }

}
