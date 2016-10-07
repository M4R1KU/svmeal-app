import {Component, OnInit, Input} from '@angular/core';
import {Meal} from "../Meal";

@Component({
    selector: 'meal-detail',
    templateUrl: 'meal-detail.component.html',
    styleUrls: ['meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

    @Input() private meal: Meal;

    constructor() {
    }

    ngOnInit() {
    }

}
