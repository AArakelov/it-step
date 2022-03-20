import {createAction, props} from "@ngrx/store";
import {Film, People, Planet, StarShip} from "../../../shared/models";

export const loadPeoples = createAction('[Page film] Load peoples');
export const loadPeoplesSuccess = createAction('[Page film] Load peoples success');
export const loadPeoplesFailed = createAction('[Page film] Load peoples failed');


export const loadPageData = createAction('[Page film] Load data', props<{planets: Planet[], peoples: People[], starships: StarShip[]}>());
export const loadPageDataSuccess = createAction('[Page film] Load data success',
  props<{planets: Planet[], peoples: People[], starships: StarShip[]}>());
export const loadDataFailed = createAction('[Page film] Load data failed');

export const loadStarShips= createAction('[Page film] Load starShips');
export const loadStarShipsSuccess = createAction('[Page film] Load starShips success');
export const loadStarShipsFailed = createAction('[Page film] Load starShips failed');
