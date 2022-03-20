import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }

  // todo: Сделать получение токена из стора, а не напрямую из локалстораджа
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = localStorage.getItem('token');
    if (token) {
      authReq = req.clone({
        headers: req.headers.set(`Authorization`, token),
      })
    }

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log('Server response')
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401)
              console.log('Unauthorized')
          }
        }
      )
    )
  }
}
