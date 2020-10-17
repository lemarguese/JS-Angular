import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/classes/user';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  logged = false;
  regForm: FormGroup;
  constructor(private appServ: AppService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }
  signup(): void {
    if (this.regForm.invalid) {
      return;
    }
    const polzo = this.regForm.value;
    const username = this.regForm.get('username').value;
    const password = this.regForm.get('password').value;
    this.appServ.signup(polzo).subscribe(() => {
      this.appServ.login(username, password).subscribe(data => {
        if (data && data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          this.router.navigate(['/main']);
        }
      });
    });

  }
}
