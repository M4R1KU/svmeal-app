import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders} from "angularfire2";

@Injectable()
export class UserService {
    private loggedIn = false;
    private user = {};

    constructor(private af: AngularFire) {
        this.af.auth.subscribe(user => {
           this.user = user ? user : {};
        });
    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Google
        });
        this.loggedIn = true;
    }

    logout() {
        this.af.auth.logout();
        this.loggedIn = false;
    }

    getUser() {
        return this.user;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}
