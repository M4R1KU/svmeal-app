import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantChooserComponent} from './restaurant-chooser/restaurant-chooser.component';
import {RestaurantService} from './service/restaurant.service';
import {SvmealAppMaterialModule} from '../svmeal-app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {RestaurantResolverService} from './service/restaurant-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        SvmealAppMaterialModule
    ],
    declarations: [
        RestaurantChooserComponent,
        RestaurantDetailComponent
    ],
    exports: [
        RestaurantChooserComponent,
        RestaurantDetailComponent
    ]
})
export class RestaurantModule {
    public static forRoot() {
        return {
            ngModule: RestaurantModule,
            providers: [
                RestaurantService,
                RestaurantResolverService
            ]
        } as ModuleWithProviders;
    }
}
