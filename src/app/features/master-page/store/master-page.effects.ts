import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {masterPageActions} from './index'
import {combineLatest, map, switchMap} from "rxjs";
import {FilmApiService} from "../../../shared/services/film-api.service";
import {Film} from "../../../shared/models/film";
import {filmPageActions} from "../../film-page/store";

@Injectable()
export class MasterPageEffects {

  public loadFilms = createEffect(() => this.actions$.pipe(
    ofType(masterPageActions.loadFilms),
    switchMap(() => {
      return this.filmApiService.loadFilms().pipe(
        map((response: any) => {
          return response['results']
        }),
        map((films: Film[]) => {
          return films.sort((prev, next) => prev.episode_id - next.episode_id);
        }),
        map(films => {
          return masterPageActions.loadFilmsSuccess({films: films})
        })
      )
    })
  ))

  public selectFilm$ = createEffect(() => this.actions$.pipe(
    ofType(masterPageActions.selectFilm),
    switchMap((payload) => {

      const loadPlanets$ = this.filmApiService.loadPlanetsByUrl(payload.film.planets);
      const loadPeoples$ = this.filmApiService.loadPeoplesByUrl(payload.film.peoples);
      const loadStarShips$ = this.filmApiService.loadPStartShipsByUrl(payload.film.starships);
      return combineLatest([loadPlanets$, loadPeoples$, loadStarShips$]).pipe(
        map(([planets, peoples, starships]) => {
          return filmPageActions.loadPageDataSuccess({
            planets,
            peoples,
            starships
          })
        }))
    })
  ))

  constructor(
    private actions$: Actions,
    private filmApiService: FilmApiService
  ) {
  }
}
