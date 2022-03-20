import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {authActions, authSelectors} from "./index";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user";

@Injectable()
export class AuthEffects {
  public signIn$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.signIn),
    switchMap(action => {
      return this.userService.signIn(action.email, action.password).pipe(
        map(response => {
          const user: User = {
            email: action.email,
            username: action.email,
          };
          localStorage.setItem('token', response.token);

          return authActions.tryLogin({user, isRedirect: true})
        })
      );
    })
  ));
  public login$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.tryLogin),
    map(action => {
      if (action.isRedirect) {
        this.router.navigate(['dashboard/home'])
        return authActions.loginSuccess({user: action.user})
      }

      return authActions.loginSuccess({user: action.user})
    })
  ));


  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private userService: UsersService
  ) {
  }
}
