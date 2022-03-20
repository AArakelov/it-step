import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export class HttpBaseServices{

  protected readonly baseUrl = 'https://swapi.dev/api';
  protected serviceUrl = '';

  constructor(private httpClient: HttpClient) {
  }

  protected get<T>(url?: string, params?: HttpParams): Observable<T> {
    const additionalUrl = url ? `/${url}` : '';

    return this.httpClient.get<T>(`${this.baseUrl}${this.serviceUrl}${additionalUrl}`, {
      params
    });
  }
}
