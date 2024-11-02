import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-maindata',
  templateUrl: './maindata.component.html',
  styleUrl: './maindata.component.css',
})
export class MaindataComponent implements OnInit {
  datas: any;
  constructor(private forecast: ForecastService) {}

  ngOnInit(): void {
    this.forecast.getForecast().subscribe((data: any) => {
      this.datas = data;
      //console.log(data);
    });
  }
}
