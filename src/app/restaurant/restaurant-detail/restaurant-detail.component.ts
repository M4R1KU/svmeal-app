import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../model/restaurant';

@Component({
    selector: 'sv-restaurant-detail',
    templateUrl: './restaurant-detail.component.html',
    styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
    public restaurant: Restaurant;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.data.subscribe(data => this.restaurant = data.restaurant);
    }

}
