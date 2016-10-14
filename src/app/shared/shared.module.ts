import {NgModule} from '@angular/core';

import {ArrayJoinPipe} from "./pipes/array-join.pipe";

@NgModule({
    declarations: [
        ArrayJoinPipe
    ],
    exports: [
        ArrayJoinPipe
    ],
    imports: [],
    providers: [
    ],
})
export class SharedModule{}
