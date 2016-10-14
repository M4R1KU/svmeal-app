import {Directive, ElementRef} from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Directive({
    selector: 'app-router-outlet'
})
export class AppRouterOutlet extends RouterOutlet {

    //constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader)

}
