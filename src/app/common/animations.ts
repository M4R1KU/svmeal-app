import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const routeAnimations = trigger('routeAnimation', [
    transition('restaurantChooser => restaurantDetail', [
        query(':enter, :leave', style({
            position: 'absolute',
            width: '100%'
        })),
        query(':enter', style({
            transform: 'translateX(100%)'
        })),
        group([
            query(':leave', animate('325ms ease-in-out', style({
                transform: 'translateX(-100%)'
            }))),
            query(':enter', animate('325ms ease-in-out', style({
                transform: 'translateX(0)'
            })))
        ])
    ]),
    transition('restaurantDetail => restaurantChooser', [
        query(':enter, :leave', style({
            position: 'absolute',
            width: '100%'
        })),
        query(':enter', style({
            transform: 'translateX(-100%)'
        })),
        group([
            query(':leave', animate('325ms ease-in-out', style({
                transform: 'translateX(100%)'
            }))),
            query(':enter', animate('325ms ease-in-out', style({
                transform: 'translateX(0)'
            })))
        ])
    ])
]);
