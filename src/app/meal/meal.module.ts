import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MealListComponent} from "./meal-list/meal-list.component";
import {MealDetailComponent} from "./meal-detail/meal-detail.component";
import {MealService} from "./services/meal.service";
import {CommonModule as AppCommonModule} from '../common/common.module';

import {MdCardModule, MdGridListModule, MaterialModule} from "@angular/material";
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
        AppCommonModule,
        MaterialModule.forRoot(),
        MdCardModule.forRoot(),
        MdGridListModule.forRoot(),
        MaterializeModule
    ],
    providers: [
        MealService,
        DayOffsetService
    ]
})
export class MealModule{}
