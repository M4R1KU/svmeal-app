import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Restaurant} from '../model/restaurant';
import {RestaurantService} from './restaurant.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestaurantResolverService implements Resolve<Restaurant> {
    constructor(private _restaurantService: RestaurantService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Restaurant> | Promise<Restaurant> | Restaurant {
        return this._restaurantService.getRestaurant(route.paramMap.get('shortcut'));
    }
}
