import {NgModule} from '@angular/core';

import {ArrayJoinPipe} from "./array-join.pipe";

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
export class CommonModule{}
