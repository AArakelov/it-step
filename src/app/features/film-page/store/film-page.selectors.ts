import {createFeatureSelector, createSelector} from "@ngrx/store";
import {filmPageFeatureKey, FilmPageState} from "./film-page.reducer";

const getState = createFeatureSelector<FilmPageState>(filmPageFeatureKey);

export const getStarships = createSelector(getState, state => state.starships);
export const getPeoples = createSelector(getState, state => state.peoples);
export const getPlanets = createSelector(getState, state => state.planets);

export const getIsLoaded = createSelector(getState, state => state.isLoaded);
