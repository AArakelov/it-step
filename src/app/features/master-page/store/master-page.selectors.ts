import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MasterPageState, pageMainFeatureKey} from "./master-page.reducer";


const getState = createFeatureSelector<MasterPageState>(pageMainFeatureKey);

export const getIsLoading = createSelector(getState, state => state.isLoading);
export const getFilms = createSelector(getState, state => state.films)

export const getDetailFilm = createSelector(getState, state => state.selectFilm)

