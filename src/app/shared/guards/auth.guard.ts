import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {authSelectors} from "../auth/store";
import {map, take} from "rxjs";
import {User} from "../models";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router
  ) {
  }

  public canActivate() {
    return this.store.select(authSelectors.getUser)
      .pipe(
        take(1),
        map((user: User) => {
          if (!user?.token) {
            this.router.navigate(['auth']);
          }
          return !!user.token;
        })
      );
  }
}
