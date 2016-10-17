import {Injectable} from "@angular/core";
import {Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs";
import {NotificationsService} from "angular2-notifications";

@Injectable()
export class HttpInterceptor extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _notificationsService: NotificationsService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        console.log('request...');
        return super.request(url, options)
            .catch((err: any, caught: Observable<Response>) => {
                this._notificationsService.error('Error!', 'Requested resource could not be found.')
                return Observable.throw(err);
            });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        console.log('get...');
        return super.get(url, options)
            .catch((err: any, caught: Observable<Response>) => {
                console.log(err + "dsfsdf");
                this._notificationsService.error('Error!', 'Requested resource could not be found.')
                return Observable.throw(err);
            });
    }
}
