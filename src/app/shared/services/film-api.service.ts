import {Injectable} from '@angular/core';
import {HttpBaseServices} from "./http-base.services";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../models/film";

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
}
