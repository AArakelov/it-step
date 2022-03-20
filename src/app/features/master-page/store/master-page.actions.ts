import {createAction, props} from "@ngrx/store";
import {StarShip} from "../../../shared/models/starship";
import {Film} from "../../../shared/models/film";


export const loadStarShips = createAction('[Master page] Load starships');
export const loadStarShipsSuccess = createAction('[Master page] Load starships success', props<{starsShips: StarShip[]}>());
export const loadStarShipsFailed = createAction('[Master page] Load starships failed');


export const loadFilms = createAction('[Master page] Load films');
export const loadFilmsSuccess = createAction('[Master page] Load films success', props<{films: Film[]}>());
export const loadFilmsFailed = createAction('[Master page] Load films failed');

export const selectFilm = createAction('[Master page] Select film', props<{film: Film}>())
