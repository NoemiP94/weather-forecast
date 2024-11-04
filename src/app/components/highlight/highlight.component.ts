import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.css',
})
export class HighlightComponent implements OnInit {
  datas: any;
  constructor(private forecast: ForecastService) {}
  ngOnInit(): void {
    // this.forecast.getForecast().subscribe((data: any) => {
    //   this.datas = data;
    //   //console.log(data);
    // });
  }
}
