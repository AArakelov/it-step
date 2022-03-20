import {createAction} from "@ngrx/store";

export const loadPeoples = createAction('[Page film] Load peoples');
export const loadPeoplesSuccess = createAction('[Page film] Load peoples success');
export const loadPeoplesFailed = createAction('[Page film] Load peoples failed');


export const loadPlanets = createAction('[Page film] Load planets');
export const loadPlanetsSuccess = createAction('[Page film] Load planets success');
export const loadPlanetsFailed = createAction('[Page film] Load planets failed');

export const loadStarShips= createAction('[Page film] Load starShips');
export const loadStarShipsSuccess = createAction('[Page film] Load starShips success');
export const loadStarShipsFailed = createAction('[Page film] Load starShips failed');
