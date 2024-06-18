import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Definir las rutas que no requieren el token
    const excludedUrls = ['/auth/login', '/auth/register'];

    // Si la URL no está en las excluidas, agregar el token
    if (!excludedUrls.some(url => request.url.includes(url))) {
      const token = sessionStorage.getItem('jwtToken');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
