import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {MealModule} from './meal/meal.module';
import {RestaurantDetailComponent} from './restaurant/restaurant-detail/restaurant-detail.component';
import {Config} from './config/Config';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {configLoader} from './shared/service/factories';


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
    SimpleNotificationsModule
  ],
  providers: [
    Config,
    {
      provide: APP_INITIALIZER,
      useFactory: configLoader,
      deps: [Config],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
