import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service'
import { Observable }  from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weather: any;

  @Input()
  city: string;

  getWeather() {
    this.weatherService.getWeather()
      .subscribe(
        weather => this.weather = weather.weather[0].main
      )
  }

  ngOnInit(): void {
    this.getWeather();
  }

  // Promise (unused)
  // getWeatherForCity(cityId): void {
  //   this.weatherService
  //     .getWeatherForCity(cityId)
  //     .then(weather => this.weather = weather)
  //     .catch(error => console.log(error));
  // }
  //



}
