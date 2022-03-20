import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {masterPageActions} from './index'
import {catchError, map, of, switchMap} from "rxjs";
import {FilmApiService} from "../../../shared/services/film-api.service";
import {Film} from "../../../shared/models/film";

@Injectable()
export class MasterPageEffects {

  public loadFilms = createEffect(() => this.actions$.pipe(
    ofType(masterPageActions.loadFilms),
    switchMap(() => {
      return this.filmApiService.loadFilms().pipe(
        map((response: any) =>{
          return response['results']
        }),
        map((films: Film[]) =>{
          return films.sort((prev, next) => prev.episode_id - next.episode_id);
        }),
        map(films => {
          return masterPageActions.loadFilmsSuccess({films: films})
        }),
        // catchError(error => {
        //   return of(masterPageActions.loadFilmsFailed());
        // })
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private filmApiService: FilmApiService
  ) {
  }
}
