import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from './main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toasts';
  titl: string;
  isFailed: boolean;
  content: string;
  isTitle: boolean;
  isClose: boolean;
  duration: boolean;
  durat: number;
  @ViewChild ('fail') fail: HTMLInputElement;
  @ViewChild ('success') success: HTMLInputElement;
  @ViewChild ('topVert') topV: HTMLInputElement;
  @ViewChild ('cenVert') cenV: HTMLInputElement;
  @ViewChild ('botVert') botV: HTMLInputElement;
  @ViewChild ('startHor') startH: HTMLInputElement;
  @ViewChild ('cenHor') cenH: HTMLInputElement;
  @ViewChild ('endHor') endH: HTMLInputElement;

  @ViewChild ('showtitle') isTitleShow: HTMLInputElement;
  @ViewChild ('close') HasClose: HTMLInputElement;
  @ViewChild ('duration') hasDuration: HTMLInputElement;
  constructor(private main: MainService) {}
  ngOnInit(): void {
  }

  show(): void {
    this.check();
    const posH = this.getPositionHorizontal();
    const posV = this.getPositionVertical();
    this.main.showToast({title: this.titl, content: this.content, background: this.isFailed, 
      positionHoriz: posH, positionVerti: posV, 
      hasCloseButton: this.isClose, 
      hasTitle: this.isTitle, hasDuration: this.duration, duration: this.durat });
    this.titl = '';
    this.content = '';
  }

  getPositionHorizontal(): string {
    if (this.startH.checked) {
      return this.startH.value;
    } else if (this.cenH.checked) {
      return this.cenH.value;
    } else {
      return this.endH.value;
    }
  }
  getPositionVertical(): string {
    if (this.topV.checked) {
      return this.topV.value;
    } else if (this.cenV.checked) {
      return this.cenV.value;
    } else {
      return this.botV.value;
    }
  }

  checkForNone(): void {
    if (!this.titl && !this.content) {
      this.titl = 'Custom template title';
      this.content = 'Custom template content';
    }
  }

  checkColor(): void {
    if (this.fail.checked) {
      this.isFailed = true;
    }
    if (this.success.checked) {
      this.isFailed = false;
    }
  }

  check(): void {
    this.checkCloseButton();
    this.checkDuration();
    this.checkTitle();
    this.checkColor();
    this.checkForNone();
  }

  checkTitle(): void {
    if (this.isTitleShow.checked) {
      this.isTitle = true;
    } else {
      this.isTitle = false;
    }
  }
  checkCloseButton(): void {
    if (this.HasClose.checked) {
      this.isClose = true;
    } else {
      this.isClose = false;
    }
  }
  checkDuration(): void {
    if (this.hasDuration.checked) {
      this.duration = true;
    } else {
      this.duration = false;
    }
  }
}
