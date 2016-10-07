import {Component, OnInit} from '@angular/core';
import {MealService} from "../services/meal.service";
import {Meal} from "../Meal";

@Component({
    selector: 'meal-list',
    templateUrl: 'meal-list.component.html',
    styleUrls: ['meal-list.component.css']
})
export class MealListComponent implements OnInit {
    private meals: Meal[];

    constructor(private mealService: MealService) {
    }

    ngOnInit() {
        this.mealService.getMealForRestaurant("bit", "0")
            .subscribe(meals => this.meals = meals);
    }

}
