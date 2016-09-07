import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service'
import { Observable }  from 'rxjs/Observable';

export class Weather {
  public icon: string;
  public main: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService: WeatherService) {
    this.weather = new Weather;
  }

  @Input()
  city: string;

  getWeather() {
    this.weatherService.getWeather()
      .subscribe(
        weather => {
          this.weather.main = weather.weather[0].main;
          this.weather.icon = weather.weather[0].icon;
        }
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
