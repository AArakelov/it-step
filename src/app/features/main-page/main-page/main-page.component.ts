import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {masterPageActions, masterPageSelectors} from "../../master-page/store";
import {FilmApiService} from "../../../shared/services/film-api.service";
import {Observable} from "rxjs";
import {Film} from "../../../shared/models/film";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  public isLoading$ = this.store.select(masterPageSelectors.getIsLoading);
  public films$: Observable<Film[]> = this.store.select(masterPageSelectors.getFilms);

  constructor(private store: Store,
              private filmService: FilmApiService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.store.dispatch(masterPageActions.loadFilms())
  }

  public detailFilm(film: Film) {
    this.store.dispatch(masterPageActions.selectFilm({film}));
    this.router.navigate(['/dashboard/films', film.episode_id])
  }
}
