import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Toast } from '../toastModule';
import { TOAST_CONFIG } from '../tokens';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {
  title: string;
  content: string;
  color: boolean;
  hasTitle: boolean;
  hasDuration: boolean;
  hasClose: boolean;
  duration: number;
  constructor(private overlay: OverlayRef, @Inject(TOAST_CONFIG) private toastConfig: Toast) { 
    // this.title = toastConfig.title;
    // this.content = toastConfig.content;
    // console.log(this.title);
  }
  ngOnInit(): void {
    this.title = this.toastConfig.title;
    this.content = this.toastConfig.content;
    this.color = this.toastConfig.background;
    this.hasTitle = this.toastConfig.hasTitle;
    this.hasDuration = this.toastConfig.hasDuration;
    this.hasClose = this.toastConfig.hasCloseButton;
    this.duration = this.toastConfig.duration;
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

  close() {
    this.overlay.dispose();
    this.toastConfig.close();
  }
}
