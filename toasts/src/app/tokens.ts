import { InjectionToken } from '@angular/core';
import { Toast } from './toastModule';

export const TOAST_CONFIG = new InjectionToken<Toast>('toast-token');