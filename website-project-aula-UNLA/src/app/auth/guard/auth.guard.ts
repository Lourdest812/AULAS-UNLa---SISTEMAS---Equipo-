import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('jwtToken');

    if (token) {
      return true; // If the token is present, allow access
    } else {
      this.router.navigate(['/login']); // If no token, redirect to login
      return false;
    }
  }
}
