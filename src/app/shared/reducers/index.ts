import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {fromAuth} from "../auth/store";
import {environment} from "../../../environments/environment";

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.AuthState
}

export const reducers: ActionReducerMap<State> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
