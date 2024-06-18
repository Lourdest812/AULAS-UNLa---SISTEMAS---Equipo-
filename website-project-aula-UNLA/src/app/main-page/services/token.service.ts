import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];

  constructor(private router: Router) {}

  public getToken(): string | null {
    let token = sessionStorage.getItem('jwtToken');
    return token;
  }

  public getRole(): string {
    let role = sessionStorage.getItem('role')!;
    return role;
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }

    return sessionStorage.getItem('role') == 'ADMIN';
  }

  public isTeacher(): boolean {
    if (!this.isLogged()) {
      return false;
    }

    return sessionStorage.getItem('role') == 'TEACHER';
  }

  public isStudent(): boolean {
    if (!this.isLogged()) {
      return false;
    }

    return sessionStorage.getItem('role') == 'STUDENT';
  }

}
