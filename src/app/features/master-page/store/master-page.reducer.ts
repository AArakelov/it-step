import {StarShip} from "../../../shared/models/starship";
import {Action, createReducer, on} from "@ngrx/store";
import {masterPageActions} from "./index";
import {Film} from "../../../shared/models/film";
import {selectFilm} from "./master-page.actions";
import {filmPageActions} from "../../film-page/store";

export const pageMainFeatureKey = 'masterPage';


export interface MasterPageState {
  isLoading: boolean;
  starShips: StarShip[];
  films: Film[];
  processing: boolean;
  selectFilm?: Film
}

export const initialState: MasterPageState = {
  isLoading: true,
  starShips: [],
  films: [],
  processing: false,
  selectFilm: null
}

const masterPageState = createReducer(
  initialState,
  on(masterPageActions.loadFilms, (state) => ({...state, isLoading: true})),
  on(masterPageActions.loadFilmsSuccess, (state, {films}) => (
    {
      ...state,
      films,
      selectFilm: null,
      isLoading: false
    })),
  on(masterPageActions.loadFilmsFailed, (state) => ({...state, isLoading: false})),
  on(masterPageActions.selectFilm, (state, {film}) => ({...state, selectFilm: film, processing: true})),
);

export function reducer(state: MasterPageState | undefined, action: Action) {
  return masterPageState(state, action);
}
