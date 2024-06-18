import { Component } from '@angular/core';
import { LayoutService } from '../../main-page/services/layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../models/loginRequest';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginPageComponent {
  valCheck: string[] = ['remember'];
  form: FormGroup;

  constructor(public layoutService: LayoutService, public authService: AuthService, public router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.authService.login(this.getBody()).subscribe(response => {
      sessionStorage.setItem('jwtToken', response.token.toString());
      this.router.navigate(['/dashboard']); // Navigate to a protected route after login
    });
  }

  getBody(): LoginRequest {
    let body: LoginRequest = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    }
    console.log(body);
  return body;
  }
}
