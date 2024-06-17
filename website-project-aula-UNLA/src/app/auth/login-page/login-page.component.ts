import { Component } from '@angular/core';
import { LayoutService } from '../../main-page/services/layout.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginPageComponent {
  valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) { }
}
