import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.prod';
import { AuthResponse } from '../models/authResponse';
import { LoginRequest } from '../models/loginRequest';
import { RegisterRequest } from '../models/registerRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public login(loginRequest: LoginRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${environment.backendUrl}/auth/login`, loginRequest,{headers: this.httpHeaders})
  }

  public register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${environment.backendUrl}/auth/register`, registerRequest,{headers: this.httpHeaders});
  }

}
