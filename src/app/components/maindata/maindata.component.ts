import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-maindata',
  templateUrl: './maindata.component.html',
  styleUrl: './maindata.component.css',
})
export class MaindataComponent implements OnInit {
  cityName: string = '';
  weatherData: any;
  constructor(
    private forecast: ForecastService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    //all'inizio mostra i dati con città di default
    this.dataService.currentCityName.subscribe((cityName) => {
      this.cityName = cityName;
      this.getWeather();
    });
  }

  getWeather() {
    this.forecast.getForecast(this.cityName).subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

  //mostra i dati con la nuova città inserita
  // updateCity(cityName: string) {
  //   this.cityName = cityName;
  //   this.getWeather();
  // }
}
