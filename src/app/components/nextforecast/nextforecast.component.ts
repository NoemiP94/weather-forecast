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
    this.dataService.currentCityName.subscribe((cityName) => {
      this.cityName = cityName;
      this.getNextForecast();
    });
  }
  getNextForecast() {
    this.forecast.getForecast(this.cityName).subscribe((data: any) => {
      this.weatherData = data.list;
      // this.weatherData.list = Object.keys(data).map((key) => {
      //   data[key] = key;
      //   return data[key];
      // });
      console.log(this.weatherData);
    });
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

  getDayOfWeek(dateString: string): string {
    const daysOfWeek = [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
    ];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  }

  getTime(dateString: string): string {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0'); // Aggiungi zero se necessario
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Aggiungi zero se necessario
    return `${hours}:${minutes}`;
  }
}
