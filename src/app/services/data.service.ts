import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cityNameSource = new BehaviorSubject<string>('Milano');
  currentCityName = this.cityNameSource.asObservable();

  constructor() {}

  changeCityName(cityName: string) {
    this.cityNameSource.next(cityName);
  }
}
