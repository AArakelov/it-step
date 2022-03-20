import {User} from "../../models/user";
import {Action, createReducer, on} from "@ngrx/store";
import * as authActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  token: string;
  user: User;
  isSignInLoading: boolean;
}

export const initialState: AuthState = {
  token: null,
  user: null,
  isSignInLoading: null
};

const authReducer = createReducer(
  initialState,
  on(authActions.signIn, state => ({...state, isSignInLoading: true})),
  on(authActions.signInFailed, (state, {signInError}) => ({...state, isSignInLoading: false})),
  on(authActions.loginSuccess, (state, {user}) => ({
    ...state,
    user,
    token: localStorage.getItem('token')
  })),

)
export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
