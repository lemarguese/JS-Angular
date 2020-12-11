import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = new FormControl(
    '', [Validators.required]
  );
  password = new FormControl(
    '', [Validators.required]
  );
  constructor(private loginService: LoginService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  register(): void {
    const user = this.username.value;
    if (user === 'lemarguesse') {
      this.snackbar.open('Username exists.', 'Close', {
        duration: 2000
      });
      return;
    }
    const pass = this.password.value;
    if (user && pass) {
      this.loginService.register(user, pass);
    } else {
      this.snackbar.open('Invalid username or password!', 'Close', {
        duration: 2000
      });
    }
  }

}
