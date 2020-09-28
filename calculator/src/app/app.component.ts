import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator';
  result = 0;
  i = 0;
  newstr = '';
  num1 = "";
  num2 = '';
  state = '';
  ok = false;
  constructor() {}
  ngOnInit(){}
  sum(): void {
    if (this.num1) {
      this.ok = true;
      (document.getElementById('texts') as HTMLInputElement).value = ' ';
      this.state = '+';
    }
  }
  showres(): void {
    if (this.state === '+') {
      this.result = parseInt(this.num1, 10) + parseInt(this.num2, 10);  
    } else if (this.state === '-') {
      this.result = parseInt(this.num1, 10) - parseInt(this.num2, 10);
    }else if (this.state === '/') {
      this.result = parseInt(this.num1, 10) / parseInt(this.num2, 10);
    }else if (this.state === '*') {
      this.result = parseInt(this.num1, 10) * parseInt(this.num2, 10);
    }else if (this.state === 'pow') {
      this.result = Math.pow(parseInt(this.num1, 10), parseInt(this.num2, 10));
    }else if (this.state === 'sqrt') {
      this.result = Math.sqrt(parseInt(this.num1, 10));
    }else if (this.state === '%') {
      this.result = parseInt(this.num1, 10) % parseInt(this.num2, 10);
    } else if (this.state === 'onediv'){
      this.result = 1 / parseInt(this.num1, 10);
    }
    (document.getElementById('texts') as HTMLInputElement).value = this.result.toString();
    this.result = 0;
    this.num1 = '';
    this.num2 = '';
    this.ok = false;
  }
  clear():void {
    (document.getElementById('texts') as HTMLInputElement).value = ' ';
    this.result = 0;
    this.num1 = '';
    this.num2 = '';
  }
  count(event):void {
    if (this.ok === false) {
      if (event.target.value !== '+' || event.target.value !== 'CE' || 
      event.target.value !== '—' || event.target.value !== 'pow' || 
      event.target.value !== '/' || event.target.value !== 'x' || event.target.value !== '%' ||
      event.target.value !== 'sqrt' || event.target.value !== 'C' || event.target.value !== '1/x') {
        this.num1 += event.target.value;
      }
    } else {
      if (event.target.value !== '+' || event.target.value !== 'CE' || 
      event.target.value !== '—' || event.target.value !== 'pow' || 
      event.target.value !== '/' || event.target.value !== 'x' || event.target.value !== '%' ||
      event.target.value !== 'sqrt' || event.target.value !== 'C' || event.target.value !== '1/x') {
        this.num2 += event.target.value;
      }
    }
    if (event.target.value === '1') {
      (document.getElementById('texts') as HTMLInputElement).value += '1';
    } else if (event.target.value === '2') {
      (document.getElementById('texts') as HTMLInputElement).value += '2';
    } else if (event.target.value === '3') {
      (document.getElementById('texts') as HTMLInputElement).value += '3';
    } else if (event.target.value === '4') {
      (document.getElementById('texts') as HTMLInputElement).value += '4';
    } else if (event.target.value === '5') {
      (document.getElementById('texts') as HTMLInputElement).value += '5';
    } else if (event.target.value === '6') {
      (document.getElementById('texts') as HTMLInputElement).value += '6';
    } else if (event.target.value === '7') {
      (document.getElementById('texts') as HTMLInputElement).value += '7';
    } else if (event.target.value === '8') {
      (document.getElementById('texts') as HTMLInputElement).value += '8';
    } else if (event.target.value === '9') {
      (document.getElementById('texts') as HTMLInputElement).value += '9';
    } else if (event.target.value === '0') {
      (document.getElementById('texts') as HTMLInputElement).value += '0';
    }
  }
  mult():void {
    if (this.num1) {
      this.ok = true;
      (document.getElementById('texts') as HTMLInputElement).value = ' ';
      this.state = '*';
    }
  }
  minus():void {
    if (this.num1) {
      this.ok = true;
      (document.getElementById('texts') as HTMLInputElement).value = ' ';
      this.state = '-';
    }
  }
  divide():void {
    if (this.num1) {
      this.ok = true;
      (document.getElementById('texts') as HTMLInputElement).value = ' ';
      this.state = '/';
    }
  }
  pow():void {
    if (this.num1) {
      this.ok = true;
      (document.getElementById('texts') as HTMLInputElement).value = ' ';
      this.state = 'pow';
    }
  }
  sqrt():void {
    (document.getElementById('texts') as HTMLInputElement).value = ' ';
    this.state = 'sqrt';
  }
  remind():void {
    if (this.num1) {
      this.ok = true;
      (document.getElementById('texts') as HTMLInputElement).value = ' ';
      this.state = '%';
    }
  }
  c():void {
    if (this.ok === false) {
      for (; this.i < this.num1.length; this.i++) {
        if (this.i === this.num1.length - 1) {
          break;
        } else if (this.num1.length === 1) {
            this.newstr = '';
            break;
        }
        this.newstr += this.num1[this.i];
      }
      (document.getElementById('texts') as HTMLInputElement).value = this.newstr;
      this.num1 = this.newstr;
    }
    this.i = 0;
    this.newstr = '';
    if (this.ok === true) {
        for (; this.i < this.num2.length; this.i++) {
          if (this.i === this.num2.length - 1) {
            break;
          } else if (this.num1.length === 1) {
            this.newstr = '';
            break;
          }
          this.newstr += this.num2[this.i];
        }
        (document.getElementById('texts') as HTMLInputElement).value = this.newstr;
        this.num2 = this.newstr;
      }
    }
  onediv():void {
    this.state = 'onediv';
  }
}
