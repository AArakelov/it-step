import {People, Planet, StarShip} from "../../../shared/models";
import {Action, createReducer, on} from "@ngrx/store";
import {filmPageActions} from "./index";

export const filmPageFeatureKey = 'film-page';

export interface FilmPageState {
  title: string;
  opening_crawl: string;
  release_date: Date;
  isLoading: boolean;
  starships: StarShip[];
  planets: Planet[]
  peoples?: People[];
  isLoaded: boolean
  processing: boolean;
}

export const initialState: FilmPageState = {
  title: '',
  opening_crawl: '',
  release_date: null,
  isLoading: true,
  starships: [],
  peoples: [],
  planets: [],
  isLoaded: false,
  processing: false
}

const filmPageReducer = createReducer(
  initialState,
  on(filmPageActions.loadPageData, (state) => ({
    ...state,
    processing: true,
    isLoaded: false,
  })),
  on(filmPageActions.loadPageDataSuccess, (state, {planets, peoples, starships}) => ({
    ...state,
    processing: false,
    isLoaded: true,
    planets,
    peoples,
    starships
  }))
)

export function reducer(state: FilmPageState | undefined, action: Action) {
  return filmPageReducer(state, action);
}
