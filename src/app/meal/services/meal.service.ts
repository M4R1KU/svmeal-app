import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MealPlan} from "../MealPlan";
import {Config} from "../../config/Config";
import {AppService} from "../../shared/AppService";
import {Http} from "@angular/http";

@Injectable()
export class MealService extends AppService {
    private _api: string;

    constructor(private _http: Http, private _config: Config) {
        super();
        this._api = this._config.get('api.apiBase') + this._config.get('api.context');
    }

    getMealForRestaurant(restaurant: string, dayOffSet: number): Observable<MealPlan> {
        let queryString: string = `/restaurant/${restaurant}/meal/${dayOffSet}`;
        return this._http.get(this._api + queryString)
            .map(res => res.json().data as MealPlan);
    }

    mealIsAvailable(restaurant: string): Observable<any> {
        let queryString: string = `/restaurant/${restaurant}/meal/0/available`;
        return this._http.get(this._api + queryString);
    }
}
