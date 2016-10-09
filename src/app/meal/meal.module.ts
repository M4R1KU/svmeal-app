import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MealListComponent} from "./meal-list/meal-list.component";
import {MealDetailComponent} from "./meal-detail/meal-detail.component";
import {MealService} from "./services/meal.service";
import {CommonModule as AppCommonModule} from '../common/common.module';

import {MdCardModule, MdGridListModule, MaterialModule} from "@angular/material";
import {DayOffsetService} from "./services/dayoffset.service";

@NgModule({
    declarations: [
        MealListComponent,
        MealDetailComponent
    ],
    exports: [
        MealListComponent
    ],
    imports: [
        CommonModule,
        AppCommonModule,
        MaterialModule.forRoot(),
        MdCardModule.forRoot(),
        MdGridListModule.forRoot()
    ],
    providers: [
        MealService,
        DayOffsetService
    ]
})
export class MealModule{}
