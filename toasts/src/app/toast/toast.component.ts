import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, ChangeDetectionStrategy, Inject, HostBinding, HostListener, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Toast } from '../toastModule';
import { TOAST_CONFIG } from '../tokens';
import { TOAST_ANIMATION } from './animation';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    TOAST_ANIMATION
  ]
})
export class ToastComponent implements OnInit {
  title: string;
  content: string;
  color: boolean;
  hasTitle: boolean;
  hasDuration: boolean;
  hasClose: boolean;
  duration: number;
  constructor(private overlay: OverlayRef, @Inject(TOAST_CONFIG) private toastConfig: Toast) {}
  @HostBinding('@toast')
  state: 'showedL' | 'closedL' |
  'showedR' | 'closedR' |
  'showedC' | 'closedC' = 'showedR';

  close(): void {
    this.state = this.getPosition();
    this.toastConfig.close();
    setTimeout(() => {
      this.overlay.dispose();
    }, 1000);
  }
  @HostListener('@toast.done')
  changeState(): void {
    if (this.hasDuration) {
      if (this.duration !== 1) {
        setTimeout(() => {
          this.close();
        }, this.toastConfig.duration * 1000);
      } else {
        this.hasClose = true;
      }
    }
  }
  ngOnInit(): void {
    this.setState();
    this.title = this.toastConfig.title;
    this.content = this.toastConfig.content;
    this.color = this.toastConfig.background;
    this.hasTitle = this.toastConfig.hasTitle;
    this.hasDuration = this.toastConfig.hasDuration;
    this.hasClose = this.toastConfig.hasCloseButton;
    this.duration = this.toastConfig.duration;
    // console.log(this.state);
  }

  getPosition(): any {
    if (this.toastConfig.positionVerti === 'cenV' || this.toastConfig.positionHoriz === 'centerH') {
      return 'closedC';
    } else if (this.toastConfig.positionHoriz === 'startH') {
      return 'closedL';
    } else {
      return 'closedR';
    }
  }
  setState(): void {
    if (this.toastConfig.positionVerti === 'cenV' || this.toastConfig.positionHoriz === 'centerH') {
      this.state = 'showedC';
    } else if (this.toastConfig.positionHoriz === 'startH') {
      this.state = 'showedL';
    } else {
      this.state = 'showedR';
    }
  }

}
