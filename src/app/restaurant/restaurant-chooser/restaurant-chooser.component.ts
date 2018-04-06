import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {Restaurant} from '../model/restaurant';
import {Subject} from 'rxjs/Subject';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'sv-restaurant-chooser',
    templateUrl: './restaurant-chooser.component.html',
    styleUrls: ['./restaurant-chooser.component.scss']
})
export class RestaurantChooserComponent implements OnInit {
    public searchForm: FormGroup;

    public restaurants$: Subject<Array<Restaurant>> = new BehaviorSubject([]);
    private _allRestaurants: Array<Restaurant> = [];

    constructor(private _restaurantService: RestaurantService,
                private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this._restaurantService.getRestaurants()
            .subscribe(restaurants => {
                this.restaurants$.next(restaurants);
                this._allRestaurants = restaurants;
            });

        this.searchForm = this._formBuilder.group({
            search: ['']
        });

        this.searchForm.get('search').valueChanges.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(value => value.toLowerCase().trim())
        ).subscribe((value: string) =>
            this.restaurants$.next(
                this._allRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(value))
            )
        );
    }

    public get restaurantCount() {
        return this._allRestaurants.length;
    }
}
