import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {
    AngularFireModule,
    AuthMethods,
    AuthProviders
} from "angularfire2";

import {AppComponent} from './app.component';
import {MealModule} from "./meal/meal.module";
import {UserService} from "./auth/user.service";
import {RestaurantDetailComponent} from './restaurant/restaurant-detail/restaurant-detail.component';
import {Config} from "./config/Config";
import {SimpleNotificationsModule} from "angular2-notifications";

const firebaseConfig = {
    apiKey: "AIzaSyCEuDOT4nBFFCNKIyclxhZ4yUvxi_E39Xc",
    authDomain: "svmeal-app.firebaseapp.com",
    databaseURL: "https://svmeal-app.firebaseio.com",
    storageBucket: "svmeal-app.appspot.com",
    messagingSenderId: "608875430166"
};

@NgModule({
    declarations: [
        AppComponent,
        RestaurantDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MealModule,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, {
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }),
        SimpleNotificationsModule
    ],
    providers: [
        UserService,
        Config,
        {
            provide: APP_INITIALIZER,
            useFactory: (config: Config) => () => config.load(),
            deps: [Config],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
