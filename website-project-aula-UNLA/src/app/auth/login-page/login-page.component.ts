import { Component } from '@angular/core';
import { LayoutService } from '../../main-page/services/layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../models/loginRequest';

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

  constructor(public layoutService: LayoutService) {
    this.form = new FormGroup({
      username: new FormControl(Validators.required),
      password: new FormControl(Validators.required),
    });
  }

  onSubmit() {

  }

  getBody(): LoginRequest {
    let body: LoginRequest = {
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value,
    }
  return body;
  }
}
