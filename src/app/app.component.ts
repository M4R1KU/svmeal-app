import {Component} from '@angular/core';
import {routeAnimations} from './common/animations';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'sv-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routeAnimations]
})
export class AppComponent {
    public getState(outlet: RouterOutlet) {
        return outlet.activatedRouteData.animation;
    }
}
