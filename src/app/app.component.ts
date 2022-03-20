import {ChangeDetectionStrategy, Component} from '@angular/core';
import {authActions, authSelectors} from "./shared/auth/store";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "./shared/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public user$: Observable<User> = this.store.select(authSelectors.getUser);

  constructor(private store: Store) {
  }

  public onSubmit(token: string) {
    if(token){
      this.store.dispatch(authActions.logout())
    }
  }
}
