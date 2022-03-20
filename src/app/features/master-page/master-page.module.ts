import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MasterPageComponent} from './master-page.component';
import {RouterModule, Routes} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'films/:id',
        loadChildren: () => import('../film-page/film-page.module').then(m => m.FilmPageModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
]

@NgModule({
  declarations: [
    MasterPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [RouterModule],
})
export class MasterPageModule {
}
