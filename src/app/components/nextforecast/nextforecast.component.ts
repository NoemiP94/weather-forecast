import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-nextforecast',
  templateUrl: './nextforecast.component.html',
  styleUrl: './nextforecast.component.css',
})
export class NextforecastComponent implements OnInit {
  datas: any;
  constructor(private forecast: ForecastService) {}
  ngOnInit(): void {
    // this.forecast.getNextForecast().subscribe((data: any) => {
    //   this.datas = data;
    //   console.log(data);
    // });
  }
}
