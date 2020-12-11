import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  userLog = false;
  adminLog = false;
  pressed = false;
  constructor(private router: Router) { }
  login(username, password): boolean {
    this.username = username;
    if (username && password) {
      const info = JSON.parse(localStorage.getItem('username'));
      if (info && info['user'] === username && info['pass'] === password) {
        return true;
      } else {
        return false;
      }
    }
  }

  register(username, password): void {
    const info = {user: username, pass: password, type: 'user'};
    localStorage.setItem('username', JSON.stringify(info));
    this.userLog = true;
    this.router.navigate(['main']);
  }

  logout(): void {
    if (this.adminLog) {
      this.adminLog = false;
    } else if (this.userLog) {
      this.userLog = false;
    }
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }
}
