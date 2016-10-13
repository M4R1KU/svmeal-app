import {NgModule} from "@angular/core";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {RestaurantService} from "./services/restaurant.service";

@NgModule({
    declarations: [
        RestaurantDetailComponent
    ],
    exports: [
        RestaurantDetailComponent
    ],
    providers: [
        RestaurantService
    ]
})
export class RestaurantModule {}
