import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable()
export class AuthService {
  readonly token = 'Bearer TOKEN_IT_STEP'

  constructor() { }

  getAuthToken(): string {
    return window.localStorage.getItem('token')
  }

  public signIn(email: string, password: string): Observable<{ token: string }> {
    return of({token: this.token})
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
