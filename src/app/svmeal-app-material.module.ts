import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class SvmealAppMaterialModule {
}
