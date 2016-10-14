import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import {MealPlan} from "../MealPlan";

@Injectable()
export class MealService {
    private apiAddress: string = "http://svmeal-api.jmnw.me/api/";

    constructor(private http: Http) {
    }

    getMealForRestaurant(restaurant: string, dayOffSet: number): Observable<MealPlan> {
        let queryString: string = `restaurant/${restaurant}/meal/${dayOffSet}`;
        return this.http.get(this.apiAddress + queryString)
            .map(response => response.json().data as MealPlan);
    }
}
