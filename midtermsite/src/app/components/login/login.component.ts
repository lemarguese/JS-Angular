import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AppService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  thisUser: User;
  constructor(private appService: AppService, private router: Router, private formBuild: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
    submittion() {
      if (this.loginForm.invalid) {
        return;
      }

      this.appService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
        .subscribe(
          data => {
            this.appService.logged = true;
            console.log(this.appService.logged);
            // data = this.thisUser;
            // this.logged = true;
            // console.log("logged");
            localStorage.setItem('token', data.accessToken);
            this.router.navigate(['/main']);
          },
        );
      }

      logout(): void {
        localStorage.clear();
      }
}
