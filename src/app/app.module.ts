import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./shared/reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./shared/auth/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/guards/auth.guard";
import {MAT_DATE_FORMATS} from "@angular/material/core";
import {CUSTOM_DATE_FORMATS} from "./shared/utils/custom-date-format";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS
    }
    ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
