import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe'
import {RecipeItemComponent} from './recipe-item.component';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    directives:[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipe = new Recipe('Dummy2', 'Dummy2', 'http://graphics8.nytimes.com/images/2012/05/20/magazine/20wmt/20wmt-articleLarge.jpg')

    constructor() {
    }

    ngOnInit() {
    }

    onSelected(recipe:Recipe){
        this.recipeSelected.emit(recipe);
    }

}
