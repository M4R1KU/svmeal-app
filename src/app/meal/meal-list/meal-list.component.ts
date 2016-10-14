import {Component, OnInit} from '@angular/core';
import {MealService} from "../services/meal.service";
import {Meal} from "../Meal";
import {UserService} from "../../auth/user.service";
import {AngularFire} from "angularfire2";
import {DayOfWeek} from "../services/day-of-week.enum";
import {DayOffsetService} from "../services/dayoffset.service";

@Component({
    selector: 'meal-list',
    templateUrl: 'meal-list.component.html',
    styleUrls: ['meal-list.component.css']
})
export class MealListComponent implements OnInit {
    private _meals: Meal[];
    private _date: Date;
    private _currentDay: number = this._dayOffsetService.today;
    private _days: any[];

    constructor(private _mealService: MealService, private userService: UserService, private af: AngularFire, private _dayOffsetService: DayOffsetService) {
    }

    ngOnInit() {
        if (this._dayOffsetService.today !== DayOfWeek.Saturday) {
            this._days = this._dayOffsetService.getValidDays();
            this.setMealPlan("bit", this._dayOffsetService.calculateAndSetCurrentOffset(this._currentDay));
        } else {
            //do something
        }
    }

    nextDay() {
        this.updateDay(this._currentDay+1);
    }

    previousDay() {
        this.updateDay(this._currentDay-1);
    }

    updateDay(value) {
        this._currentDay = value;
        this.setMealPlan("bit", this._dayOffsetService.calculateAndSetCurrentOffset(this._currentDay));
    }

    isValidOffset(offset: number) {
        return this._dayOffsetService.isValidOffset(offset);
    }


    // todo rename????
    private setMealPlan(restaurant: string, dayOffset: number) {
        this._mealService.getMealForRestaurant(restaurant, dayOffset)
            .subscribe(mealPlan => {
                this._meals = mealPlan.offers;
                this._date = mealPlan.date;
            });
    }
}
