import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {StarShip} from "../models/starship";
import {HttpClient} from "@angular/common/http";
import {HttpBaseServices} from "./http-base.services";

@Injectable({
  providedIn: 'root'
})
export class StarShipService extends HttpBaseServices{

  constructor(private http: HttpClient) {
    super(http)
  }

  public loadStarShips(): Observable<StarShip[]>{
    return this.get('starships')
  }
}
