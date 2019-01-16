import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: {email: string, password: string} = {email: '', password: ''};
  formIsSubmitted = false;
  public loginForm: FormGroup;
  serverValidationErrors = '';

  constructor(private _authService: AuthService, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.resetServerErrors();
    this.formIsSubmitted = true;
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.controls['email'].value,
        password : this.loginForm.controls['password'].value
      };
      this.serverValidationErrors = '';
      this._authService.login(user).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('pseudo', res.pseudo);
          this._authService.setCurrentUser(res.pseudo);
          this._router.navigate(['/']);
        },
        err => this.handleError(err)
      );
    }
  }

  handleError(error) {
    if (error.error === 'password') {
      this.loginForm.controls['password'].setErrors({serverError: true});
    } if (error.error === 'email') {
      this.loginForm.controls['email'].setErrors({serverError: true});
    }
  }

  resetServerErrors() {
    this.loginForm.controls['password'].setErrors(null);
    this.loginForm.controls['email'].setErrors(null);
  }
}
