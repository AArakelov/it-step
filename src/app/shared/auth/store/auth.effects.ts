import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {authActions} from "./index";
import {map, switchMap, tap} from "rxjs";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthEffects {
  public signIn$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.signIn),
    switchMap(action => {
      return this.authService.signIn(action.email, action.password).pipe(
        map(response => {
          const user: User = {
            email: action.email,
            username: action.email,
            token: response.token
          };
          localStorage.setItem('token', user.token);
          this.router.navigate(['dashboard/home'])
          return authActions.loginSuccess({user})
        })
      );
    })
  ));

  public logout$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.logout),
    tap(() => {
      localStorage.removeItem('token');
      this.router.navigate(['auth'])
    })
  ), {dispatch: false});


  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {
  }
}
