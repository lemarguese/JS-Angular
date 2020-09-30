import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatRadioButton, _MatRadioButtonBase, _MatRadioGroupBase } from '@angular/material/radio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  title = 'oprosnik';
  answers = [];
  time = new Date();
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  i = 0;
  count = 0;
  cnt = 0;
  timeLeft: number = 100;
  interval;
  ok = false;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        if (this.timeLeft === 91) {
          this.disable('first');
        } else if (this.timeLeft === 81) {
          this.disable('second');
        } else if (this.timeLeft === 71) {
          this.disable('third');
        } else if (this.timeLeft === 61) {
          this.disableforInput('fourth');
        } else if (this.timeLeft === 51) {
          this.disableforInput('fifth');
        } else if (this.timeLeft === 41) {
          this.disable('sixth');
        } else if (this.timeLeft === 31) {
          this.disableforInput('seventh');
        } else if (this.timeLeft === 21) {
          this.disable('eighth');
        } else if (this.timeLeft === 11) {
          this.disable('nineth');
        } else if (this.timeLeft === 1) {
          this.disable('tenth');
        }
      } else {
        this.ok = true;
        this.timeLeft = 100;
      }
    }, 1000);
  }
  // tslint:disable-next-line: typedef
  enableForRadio(event) {
    this.answers.push(event.target.value);
  }
  enableForText (event) {
    this.answers.push(event.target.innerHTML);
  }
  getResult () {
    this.cnt++;
    if (this.cnt === 1) {
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i] === '1812') {
          this.count++;
        } else if (this.answers[i] === 'lips') {
          this.count++;
        } else if (this.answers[i] === 'etil') {
          this.count++;
        } else if (this.answers[i] === 'false') {
          this.count++;
        } else if (this.answers[i] === 'yes') {
          this.count++;
        } else if (this.answers[i] === 'false') {
          this.count++;
        } else if (this.answers[i] === 'yes') {
          this.count++;
        } else if (this.answers[i] === 'U*I' || this.answers[i] === 'I*U') {
          this.count++;
        } else if (this.answers[i] === 'Attila') {
          this.count++;
        }else if (this.answers[i] === '1986') {
          this.count++;
        }
      }
    }
  }

  disableforInput(name) {
    const items: any = document.getElementById(name);
    (items as HTMLInputElement).disabled = true;
  }

  disable(name): void {
    const items: any = document.getElementsByClassName(name);
    for (let i = 0; i < items.length; i++) {
      let element = items[i];
      (element as HTMLInputElement).disabled = true;
    }
  }

  ngOnInit() {
    // if (!this.ok) {
    //   this.startTimer();
    // } else {
    //   clearInterval(this.interval);
    //   this.getResult();
    // }
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this.formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
  }
}
