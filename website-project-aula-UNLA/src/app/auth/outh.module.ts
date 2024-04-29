import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AccessDeniedPageComponent } from './access-denied-page/access-denied-page.component';
import { AuthRoutingModule } from './ouath-routing.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    ErrorPageComponent,
    AccessDeniedPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
