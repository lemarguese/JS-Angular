import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const TOAST_ANIMATION = trigger('toast', [
    state('showedL', style({ opacity: 1, transform: 'translateX(20px)' })),
    transition('void => showedL', [style({ opacity: 0 }), animate('1s')]),
    state('closedL', style({ opacity: 0, transform: 'translateX(-20px)' })),
    transition(
        'showedL => closedL',
        [style({ opacity: 1 }),
        animate('1s')]
    ),
    state('showedC', style({ opacity: 1 })),
    transition('void => showedC', [style({ opacity: 0 }), animate('1s')]),
    state('closedC', style({ opacity: 0 })),
    transition(
        'showedC => closedC',
        [style({ opacity: 1 }),
        animate('1s')]
    ),
    state('showedR', style({ opacity: 1, transform: 'translateX(-20px)' })),
    transition('void => showedR', [style({ opacity: 0 }), animate('1s')]),
    state('closedR', style({ opacity: 0, transform: 'translateX(20px)' })),
    transition(
        'showedR => closedR',
        [style({ opacity: 1 }),
        animate('1s')]
    )
]);
