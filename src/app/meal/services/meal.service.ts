import {Http} from "@angular/http";
import {Meal} from "../Meal";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

@Injectable()
export class MealService {
    private apiAddress: string = "http://svmeal-api.jmnw.me/api/";

    constructor(private http: Http) {}

    getMealForRestaurant(restaurant: string, dayOffSet: string): Observable<Meal[]> {
        let queryString: string = `restaurant/${restaurant}/meal/${dayOffSet}`;
        return this.http.get(this.apiAddress + queryString)
            .map(response => response.json().data.offers as Meal[]);
    }
}
