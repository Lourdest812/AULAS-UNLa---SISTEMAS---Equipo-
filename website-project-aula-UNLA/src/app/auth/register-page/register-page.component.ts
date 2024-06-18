import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LayoutService } from '../../main-page/services/layout.service';
import { AuthService } from '../service/auth.service';
import { RegisterRequest } from '../models/registerRequest';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
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
export class RegisterPageComponent {
  valCheck: string[] = ['remember'];
  form: FormGroup;
  private roleSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public role$: Observable<string> = this.roleSubject.asObservable();

  roles = ['ADMIN', 'STUDENT', 'TEACHER']

  constructor(public layoutService: LayoutService, public authService: AuthService, public router: Router) {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.authService.register(this.getBody()).subscribe(response => {
      sessionStorage.setItem('jwtToken', response.token.toString());
      sessionStorage.setItem('role', JSON.stringify(response.role.toString()));
      this.roleSubject.next(response.role.toString());
      this.router.navigate(['/dashboard']); // Navigate to a protected route after login
    });
  }

  getBody(): RegisterRequest {
    let body: RegisterRequest = {
      userName: this.form.get('userName')?.value,
      password: this.form.get('password')?.value,
      role: this.form.get('role')?.value,
    }
    console.log(body);
    return body;
  }
}
