import {Injectable} from '@angular/core';
import {HttpBaseServices} from "./http-base.services";
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, of} from "rxjs";
import {Film} from "../models/film";
import {People, Planet, StarShip} from "../models";

@Injectable({
  providedIn: 'root'
})
export class FilmApiService extends HttpBaseServices {

  constructor(private http: HttpClient) {
    super(http)
  }

  public loadFilms(): Observable<Film[]> {

    return this.get<Film[]>('films')
  }

  public loadPlanetsByUrl(url: string[]): Observable<Planet[]> {
    if (!url && !url?.length) {
      return of([null])
    }
    return forkJoin(url.map(url => {
      return this.http.get<Planet>(url)
    }))
  }

  public loadPeoplesByUrl(url: string[]): Observable<People[]> {
    if (!url && !url?.length) {
      return of([null])
    }
    return forkJoin(url.map(url => {
      return this.http.get<People>(url)
    }))
  }

  public loadPStartShipsByUrl(url: string[]): Observable<StarShip[]> {
    if (!url && !url?.length) {
      return of([null])
    }
    return forkJoin(url.map(url => {
      return this.http.get<StarShip>(url)
    }))
  }
}
