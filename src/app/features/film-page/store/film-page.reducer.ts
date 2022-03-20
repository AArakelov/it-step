import {People, Planet, StarShip} from "../../../shared/models";
import {Action, createReducer} from "@ngrx/store";

export const filmPageFeatureKey = 'film-page';

export interface FilmPageState {
  title: string;
  opening_crawl: string;
  release_date: Date;
  isLoading: boolean;
  starShips: StarShip[];
  planets: Planet[]
  peoples: People[];
}

export const initialState: FilmPageState = {
  title: '',
  opening_crawl: '',
  release_date: null,
  isLoading: true,
  starShips: [],
  peoples: [],
  planets: []
}

const filmPageReducer = createReducer(
  initialState,
)

export function reducer(state: FilmPageState | undefined, action: Action) {
  return filmPageReducer(state, action);
}
