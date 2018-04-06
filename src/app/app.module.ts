import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SvmealAppMaterialModule} from './svmeal-app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RestaurantModule} from './restaurant/restaurant.module';
import {RouterModule} from '@angular/router';
import {RestaurantChooserComponent} from './restaurant/restaurant-chooser/restaurant-chooser.component';
import {RestaurantDetailComponent} from './restaurant/restaurant-detail/restaurant-detail.component';
import {RestaurantResolverService} from './restaurant/service/restaurant-resolver.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SvmealAppMaterialModule,
        RestaurantModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                component: RestaurantChooserComponent,
                data: {
                    animation: 'restaurantChooser'
                }
            },
            {
                path: 'restaurant/:shortcut',
                component: RestaurantDetailComponent,
                data: {
                    animation: 'restaurantDetail'
                },
                resolve: {
                    restaurant: RestaurantResolverService
                }
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
