import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

export const setToken = createAction('[Auth] Set token', props<{ token: string }>());

export const signIn = createAction('[Auth] SignIn', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login success', props<{ user: User}>());
export const loginFailed = createAction('[Auth] Login failed');

export const logout = createAction('[Auth] Logout');
