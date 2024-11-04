import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nextforecast',
  templateUrl: './nextforecast.component.html',
  styleUrl: './nextforecast.component.css',
})
export class NextforecastComponent implements OnInit {
  cityName: string = '';
  weatherData: any;
  constructor(
    private forecast: ForecastService,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    //all'inizio mostra i dati con città di default
    // this.dataService.currentCityName.subscribe((cityName) => {
    //   this.cityName = cityName;
    //   this.getNextWeather();
    // });
  }

  // getNextWeather() {
  //   this.forecast.getNextForecast(this.cityName).subscribe((data: any) => {
  //     this.weatherData = data;
  //     console.log(this.weatherData);
  //   });
  // }
}
