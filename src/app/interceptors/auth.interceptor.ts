import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}

//exemple de code :
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   isAuthenticated = false;
//
//   constructor(private readonly authService: AuthService) {
//     this.authService.isAuthenticated$.subscribe(
//       (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
//     );
//   }
//
//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     if (this.isAuthenticated) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${this.authService.getRawToken()}`,
//         },
//       });
//     }
//     return next.handle(request);
//   }
// }
