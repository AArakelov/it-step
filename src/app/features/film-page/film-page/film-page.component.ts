import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {masterPageSelectors} from "../../master-page/store";
import {Observable} from "rxjs";
import {Film} from "../../../shared/models";
import {Store} from "@ngrx/store";
import {FilmApiService} from "../../../shared/services/film-api.service";

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmPageComponent implements OnInit {

  public film$: Observable<Film> = this.store.select(masterPageSelectors.getDetailFilm);

  constructor(private store: Store, private filmService: FilmApiService) {
  }

  ngOnInit(): void {
  }

}
