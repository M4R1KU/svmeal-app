import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {SvmealResponse} from '../../model/svmeal-response';
import {Restaurant} from '../model/restaurant';
import {map} from 'rxjs/operators';

@Injectable()
export class RestaurantService {
    constructor(private _http: HttpClient) {
    }

    public getRestaurants(): Observable<Array<Restaurant>> {
        return this._http.get<SvmealResponse<Array<Restaurant>>>(`${environment.api.url}/restaurant`)
            .pipe(map(resp => resp.data));
    }

    public getRestaurant(shortcut: string): Observable<Restaurant> {
        return this.getRestaurants()
            .pipe(map(restaurants =>
                restaurants.find(restaurant => restaurant.shortcut === shortcut)
            ));
    }
}
