import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FilmApiService} from "../../../shared/services/film-api.service";


@Injectable()
export class FilmPageEffects {
  //
  // public selectFilm$ = createEffect(() => this.actions$.pipe(
  //     ofType(filmPageActions.loadPageData),
  //     switchMap(value => {
  //       console.log(value, 'value')
  //       return of(value)
  //     })
  //   )
  // )
  constructor(
    private actions$: Actions,
    private filmApiService: FilmApiService
  ) {
  }
}
