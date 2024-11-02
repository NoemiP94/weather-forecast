import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  APIKey = 'b4ec94624363dba072a0ec4073e9b6d4';
  cityName = 'Milan';
  baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.APIKey}`;
  constructor(private http: HttpClient) {}

  getForecast(url: string) {
    return this.http.get(this.baseURL);
  }
}
