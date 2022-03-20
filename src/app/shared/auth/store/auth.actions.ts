import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

export const setToken = createAction('[Auth] Set token', props<{ token: string }>());
export const signIn = createAction('[Auth] SignIn', props<{ email: string, password: string }>());
export const signInFailed = createAction('[Auth] SignIn failed', props<{ signInError: string }>());

export const tryLogin = createAction('[Auth] Try login', props<{ user?: User; isRedirect?: boolean }>());
export const loginSuccess = createAction('[Auth] Login success', props<{ user: User}>());
export const loginFailed = createAction('[Auth] Login failed');

export const logout = createAction('[Auth] Logout');
