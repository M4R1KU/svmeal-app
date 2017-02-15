import {Component} from '@angular/core';
import {Config} from "./config/Config";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'svmeal-app';
    private options = { // options for simple-notifications
        timeOut: 10000,
        animate: 'fromRight'
    };

    constructor(private _config: Config) {
    }
}
