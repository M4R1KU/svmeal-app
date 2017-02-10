import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MealPlan} from "../MealPlan";
import {Config} from "../../config/Config";
import {HttpInterceptor} from "../../shared/http/HttpInterceptor";

@Injectable()
export class MealService {
    private _api: string;

    constructor(private http: HttpInterceptor, private config: Config) {
        this._api = this.config.get('api.apiBase') + this.config.get('api.context');
    }

    getMealForRestaurant(restaurant: string, dayOffSet: number): Observable<MealPlan> {
        let queryString: string = `/restaurant/${restaurant}/meal/${dayOffSet}`;
        return this.http.get(this._api + queryString)
            .map(res => res.json().data as MealPlan);
    }

    mealIsAvailable(restaurant: string): Observable<any> {
        let queryString: string = `/restaurant/${restaurant}/meal/0/available`;
        return this.http.get(this._api + queryString);
    }
}
