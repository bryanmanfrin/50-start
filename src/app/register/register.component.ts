import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  invalidForm = false;
  private registerForm: FormGroup;
  private formIsSubmitted = false;

  constructor(private _authService: AuthService, private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required)
    });
  }

  register() {
    this.formIsSubmitted = true;
    if (this.registerForm.valid) {
      const user = {
        email: this.registerForm.controls['email'].value,
        password : this.registerForm.controls['password'].value,
        pseudo : this.registerForm.controls['pseudo'].value
      };
      this._authService.register(user).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('pseudo', res.pseudo);
          this._authService.setCurrentUser(res.pseudo);
          this._router.navigate(['/']);
        },
        (err) => this.invalidForm = true
      );
    }
  }

}
