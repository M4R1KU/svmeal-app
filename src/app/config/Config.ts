import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class Config {
    private _env: Object;
    private _config: Object;

    constructor(private _http: Http) {
        this._env = environment;
    }

    load() {
        return new Promise((resolve) => {
            this._http.get(`app/config/${this._env['envName']}.json`)
                .map(res => res.json())
                .subscribe(config => {
                    this._config = config;
                    resolve();
                });
        });
    }

    getEnv(key: any) {
        return this._env[key];
    }

    get(key: any) {
        'fkdjfsdf.fdfd.fdfdf.df'
        return this._config[key];
    }
}
