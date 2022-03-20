import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FilmApiService} from "../../../shared/services/film-api.service";


@Injectable()
export class FilmPageEffects {
  constructor(
    private actions$: Actions,
    private filmApiService: FilmApiService
  ) {
  }
}
