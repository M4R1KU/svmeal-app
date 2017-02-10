import {NgModule} from '@angular/core';
import {ArrayJoinPipe} from "./pipes/array-join.pipe";
import {SimpleNotificationsModule} from "angular2-notifications";
import {HttpInterceptor} from "./http/HttpInterceptor";

@NgModule({
    declarations: [
        ArrayJoinPipe
    ],
    exports: [
        ArrayJoinPipe
    ],
    imports: [
        SimpleNotificationsModule
    ],
    providers: [
        HttpInterceptor
    ],
})
export class SharedModule{}
