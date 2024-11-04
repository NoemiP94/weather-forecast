import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent implements OnInit {
  @ViewChild('cityInput') cityInput!: ElementRef;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {}

  sendCityName(event: Event) {
    event.preventDefault();
    const cityName = this.cityInput.nativeElement.value;
    this.dataService.changeCityName(cityName);
  }
}
