import {Component} from '@angular/core';
import {UserService} from "./auth/user.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'svmeal-app';

    constructor(private userService: UserService) {
    }

    login() {
        this.userService.login();
    }

    logout() {
        this.userService.logout();
    }
}
