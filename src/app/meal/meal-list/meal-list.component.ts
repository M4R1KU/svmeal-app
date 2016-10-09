import {Component, OnInit} from '@angular/core';
import {MealService} from "../services/meal.service";
import {Meal} from "../Meal";
import {UserService} from "../../auth/user.service";
import {AngularFire} from "angularfire2";
import {DayOfWeek} from "../services/day-of-week.enum";
import {DayOffsetService} from "../services/dayoffset.service";
import * as _ from "underscore";

@Component({
    selector: 'meal-list',
    templateUrl: 'meal-list.component.html',
    styleUrls: ['meal-list.component.css']
})
export class MealListComponent implements OnInit {
    private meals: Meal[];
    private date: Date;
    private currentDay: number = this.dayOffsetService.getToday();
    private days: any[];

    constructor(private mealService: MealService, private userService: UserService, private af: AngularFire, private dayOffsetService: DayOffsetService) {
    }

    ngOnInit() {
        if (this.dayOffsetService.getToday() !== DayOfWeek.Saturday) {
            this.days = this.dayOffsetService.getPossibleDaysWithNames();
            this.currentDay = this.days[0].day;

            this.setMealPlan("bit", this.getOffset(this.currentDay));
        } else {
            //do something
        }
        console.log(this.isValidDay(0));
        console.log(this.isValidDay(3));
    }

    nextDay() {
        this.setDay(this.currentDay + 1);
    }

    previousDay() {
        this.setDay(this.currentDay - 1);
    }

    setDay(value) {
        this.currentDay = value; // todo check if valid
        this.setMealPlan("bit", this.getOffset(this.currentDay));
    }

    isValidDay(day: number) {
        return (_.filter(this.days, obj => {
            return obj.day === day;
        })).length > 0;
    }


    // todo rename????
    private setMealPlan(restaurant: string, dayOffset: number) {
        this.mealService.getMealForRestaurant(restaurant, dayOffset)
            .subscribe(mealPlan => {
                this.meals = mealPlan.offers;
                this.date = mealPlan.date;
                //this.firebaseSync();
            });
    }

    private getOffset(day: number) {
        return this.dayOffsetService.calculateOffset(day);
    }


    private firebaseSync() {

    }

}
