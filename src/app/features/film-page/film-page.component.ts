import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {masterPageSelectors} from "../master-page/store";
import {Observable} from "rxjs";
import {Film, People, Planet, StarShip} from "../../shared/models";
import {Store} from "@ngrx/store";
import {FilmApiService} from "../../shared/services/film-api.service";
import {IColumn} from "../../shared/components/sort-table/sort-table.component";
import {filmPageSelectors} from "./store";

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmPageComponent implements OnInit {

  public starships$: Observable<StarShip[]> = this.store.select(filmPageSelectors.getStarships);
  public peoples$: Observable<People[]> = this.store.select(filmPageSelectors.getPeoples);
  public planets$: Observable<Planet[]> = this.store.select(filmPageSelectors.getPlanets);
  public films$: Observable<Film> = this.store.select(masterPageSelectors.getDetailFilm);


  public isLoaded$: Observable<boolean> = this.store.select(filmPageSelectors.getIsLoaded)


  public startShipsColumn: IColumn[] = [
    {
      propertyPath: 'Name',
      sortTable: true,
      label: 'name'
    },
    {
      propertyPath: 'StarshipClass',
      sortTable: false,
      label: 'starship_class'
    },
    {
      propertyPath: 'Passengers',
      sortTable: false,
      label: 'passengers'
    },

    {
      propertyPath: 'Length',
      sortTable: false,
      label: 'length'
    },

    {
      propertyPath: 'Created',
      sortTable: false,
      label: 'created'
    }
  ];
  public peopleColumn: IColumn[] = [
    {
      propertyPath: 'Name',
      sortTable: true,
      label: 'name'
    },
    {
      propertyPath: 'Gender',
      sortTable: false,
      label: 'gender'
    },

    {
      propertyPath: 'Height',
      sortTable: false,
      label: 'height'
    },

    {
      propertyPath: 'Mass',
      sortTable: false,
      label: 'mass'
    },

    {
      propertyPath: 'Created',
      sortTable: false,
      label: 'created'
    },

  ];
  public planetsColumn: IColumn[] = [
    {
      propertyPath: 'Name',
      sortTable: true,
      label: 'name'
    },
    {
      propertyPath: 'Climate',
      sortTable: false,
      label: 'climate'
    },

    {
      propertyPath: 'Gravity',
      sortTable: false,
      label: 'gravity'
    },

    {
      propertyPath: 'Population',
      sortTable: false,
      label: 'population'
    },
    {
      propertyPath: 'Created',
      sortTable: false,
      label: 'created'
    },

  ];

  constructor(private store: Store, private filmService: FilmApiService) {
  }

  ngOnInit(): void {
  }

  test(film: any) {
    console.log(film)
  }

  openDialog(event: any) {
    console.log(event)

  }
}
