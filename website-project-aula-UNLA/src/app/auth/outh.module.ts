import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AccessDeniedPageComponent } from './access-denied-page/access-denied-page.component';
import { AuthRoutingModule } from './ouath-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    AccessDeniedPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    PasswordModule,
    InputTextModule,
    CheckboxModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
