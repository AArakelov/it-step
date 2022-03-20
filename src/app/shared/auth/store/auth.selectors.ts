import {authFeatureKey, AuthState} from "./auth.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getState = createFeatureSelector<AuthState>(authFeatureKey);

export const getUser = createSelector(getState, state => state.user)

