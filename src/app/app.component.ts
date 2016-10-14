import {Component} from '@angular/core';
import {UserService} from "./auth/user.service";
import {Config} from "./config/Config";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'svmeal-app';

    constructor(private userService: UserService, private _config: Config) {
    }

    login() {
        this.userService.login();
    }

    logout() {
        this.userService.logout();
    }
}
