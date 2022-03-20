import { Component } from '@angular/core';
import {authActions} from "./shared/auth/store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itStep';
  constructor(private store: Store) {
    this.store.dispatch(authActions.tryLogin({isRedirect: false}));

  }
}
