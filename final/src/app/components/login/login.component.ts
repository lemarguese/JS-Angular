import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private snackbar: MatSnackBar) { }
  loading = false;
  username = new FormControl(
    '', [Validators.required]
  );
  password = new FormControl(
    '', [Validators.required]
  );
  
  ngOnInit(): void {
    const admin = { user: 'lemarguesse', pass: 'lemarguesse'};
    localStorage.setItem('admin', JSON.stringify(admin));
  }

  login(): void {
    this.loading = true;
    const user = this.username.value;
    const pass = this.password.value;
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin['user'] === user && admin['pass'] === pass) {
      this.loginService.adminLog = true;
      this.snackbar.open('Successful! You will be redirected.', 'Close', {
        duration: 1500
      });
      this.loading = false;
      this.router.navigate(['main']);
    } else if (this.loginService.login(user, pass)) {
        this.loginService.userLog = true;
        this.snackbar.open('Successful! You will be redirected.', 'Close', {
          duration: 1500
        });
        this.loading = false;
        this.router.navigate(['main']);
      } else {
        this.snackbar.open('Incorrect login or password!', 'Close', {
          duration: 2000
        });
        this.loading = false;
      }
    }

  redirect(): void {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['register']);
    }, 3000);
  }

}
