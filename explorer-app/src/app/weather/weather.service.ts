/**
 * Created by mikkeld on 9/6/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=2964574&APPID=0c638d84fdc82fe1965b2d60176d882a')
      .map(weather => {
         return weather.json() || { }
      })
  }


  // Promise implementation, unused

  // getWeatherForCity(cityId): Promise<any> {
  //   const url = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=0c638d84fdc82fe1965b2d60176d882a';
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json() as any)
  //     .catch(error => console.log(error));
  // }



}

