import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {fromMasterPage, MasterPageEffects} from "../master-page/store";
import {EffectsModule} from "@ngrx/effects";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  }
]

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMasterPage.pageMainFeatureKey, fromMasterPage.reducer),
    EffectsModule.forFeature([MasterPageEffects]),
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ],
  exports: [MainPageComponent, RouterModule],
})
export class MainPageModule { }
