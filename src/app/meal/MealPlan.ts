import {Meal} from "./Meal";

export interface MealPlan {
    date: Date;
    offers: Meal[];
}
