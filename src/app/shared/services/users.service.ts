import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    readonly token = 'TOKEN_IT_STEP'
  constructor() {
  }

  public signIn(email: string, password: string): Observable<{token: string}> {
    return of({token: this.token})
  }

}
