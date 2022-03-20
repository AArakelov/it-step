import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmPageComponent } from './film-page/film-page.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: FilmPageComponent
  }
]
@NgModule({
  declarations: [
    FilmPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FilmPageComponent,
    RouterModule
  ]
})
export class FilmPageModule { }
