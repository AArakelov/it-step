import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmPageComponent} from './film-page.component';
import {RouterModule, Routes} from "@angular/router";
import {SortTableModule} from "../../shared/components/sort-table/sort-table.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {FilmPageEffects, fromFilmPage} from "./store";
import {StarShipDialogModule} from "./components/star-ship-dialog/star-ship-dialog.module";
import {MatDialogModule} from "@angular/material/dialog";
import {PlanetsDetailDialogModule} from "./components/planets-detail-dialog/planets-detail-dialog.module";


const routes: Routes = [
  {
    path: '',
    component: FilmPageComponent
  }
]

@NgModule({
  declarations: [
    FilmPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromFilmPage.filmPageFeatureKey, fromFilmPage.reducer),
    EffectsModule.forFeature([FilmPageEffects]),
    SortTableModule,
    MatDialogModule,
    StarShipDialogModule,
    PlanetsDetailDialogModule,
  ],
  exports: [
    FilmPageComponent,
    RouterModule,
  ],
})
export class FilmPageModule {
}
