import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private inputValueSource = new BehaviorSubject<string>('');
  currentInputValue = this.inputValueSource.asObservable();

  APIKey = 'b4ec94624363dba072a0ec4073e9b6d4';
  lang = 'it';

  constructor(private http: HttpClient) {}

  //prende valore input
  getSearchValue(value: string) {
    this.inputValueSource.next(value);
  }

  getForecast(cityName: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${this.APIKey}&units=metric&lang=${this.lang}`;
    return this.http.get<any>(url);
  }
}
