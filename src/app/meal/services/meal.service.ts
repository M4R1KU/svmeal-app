import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import {MealPlan} from "../MealPlan";
import {Config} from "../../config/Config";

@Injectable()
export class MealService {

    constructor(private _http: Http, private _config: Config) {
    }

    getMealForRestaurant(restaurant: string, dayOffSet: number): Observable<MealPlan> {
        let queryString: string = `/restaurant/${restaurant}/meal/${dayOffSet}`;
        return this._http.get(this._config.get('api.apiBase') + queryString)
            .map(response => response.json().data as MealPlan);
    }
}
