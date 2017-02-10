import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MealListComponent} from "./meal-list/meal-list.component";
import {MealDetailComponent} from "./meal-detail/meal-detail.component";
import {MealService} from "./services/meal.service";
import {SharedModule} from '../shared/shared.module';

import {MaterialModule} from "@angular/material";
import {DayOffsetService} from "./services/dayoffset.service";
import {FormsModule} from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";

@NgModule({
    declarations: [
        MealListComponent,
        MealDetailComponent
    ],
    exports: [
        MealListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        MaterialModule.forRoot()
    ],
    providers: [
        MealService,
        DayOffsetService
    ]
})
export class MealModule{}
