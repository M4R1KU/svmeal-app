import {NgModule} from '@angular/core';

import {ArrayJoinPipe} from "./pipes/array-join.pipe";
import {HttpInterceptor} from "./HttpInterceptor";
import {Http, XHRBackend, RequestOptions, HttpModule} from "@angular/http";
import {NotificationsService, SimpleNotificationsModule} from "angular2-notifications";

@NgModule({
    declarations: [
        ArrayJoinPipe
    ],
    exports: [
        ArrayJoinPipe
    ],
    imports: [
        HttpModule,
        SimpleNotificationsModule
    ],
    providers: [
        {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, notificationsService: NotificationsService) => new HttpInterceptor(backend, defaultOptions, notificationsService),
            deps: [XHRBackend, RequestOptions, NotificationsService]
        }
    ],
})
export class SharedModule{}
