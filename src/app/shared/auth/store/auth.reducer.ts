import {User} from "../../models/user";
import {Action, createReducer, on} from "@ngrx/store";
import * as authActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: localStorage.getItem('token') !== null,

};

const authReducer = createReducer(
  initialState,
  on(authActions.signIn, state => ({...state, isSignInLoading: true})),
  on(authActions.loginSuccess, (state, {user}) => ({
    ...state,
    isAuthenticated: true,
    user
  })),
  on(authActions.logout, state => ({
    ...state,
    ...initialState
  })),
)

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

