import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/outh.module').then( m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPageModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }