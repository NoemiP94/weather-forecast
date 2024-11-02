import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  APIKey = 'b4ec94624363dba072a0ec4073e9b6d4';
  cityName = 'Milan';
  lang = 'it';
  baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.APIKey}&units=metric&lang=${this.lang}`;
  //nextForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.cityName}&cnt=10&appid=${this.APIKey}&units=metric&lang=${this.lang}`;
  constructor(private http: HttpClient) {}

  getForecast() {
    return this.http.get(this.baseURL);
  }

  // getNextForecast() {
  //   return this.http.get(this.nextForecast);
  // }
}
