import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn =
 trigger('fadeIn', [
     transition(':enter', [
         style({
             opacity: 0
         }),
         animate('500ms linear', style({
            opacity: 1
        }))
     ])
 ])