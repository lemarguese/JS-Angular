export interface Toast {
    title: string;
    content: string;
    background: boolean;
    positionVerti: string;
    positionHoriz: string;
    hasCloseButton?: boolean;
    hasTitle?: boolean;
    hasDuration?: boolean;
    duration?: number;
    close?: () => void;
}
