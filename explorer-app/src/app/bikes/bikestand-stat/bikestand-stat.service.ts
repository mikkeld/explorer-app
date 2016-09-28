import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BikestandStatService {

  constructor(
    private af: AngularFire,
    private http: Http
  ) { }

  getBikestandStat(id: number): Observable<any> {
    let val;
    this.http.get(`https://api.jcdecaux.com/vls/v1/stations/${id}?contract=Dublin&apiKey=01763a585c8ab4e264684c27269cb9aec86a24bf`)
      .map(data => {
        return data.json() || {};
      }).subscribe(res => {
        val = res.bike_stands;
    })

    return this.af.database.list(`/time/${id}`)
      .map(data => {
        return data.map(res => {
          return {available_bikes: res.available_bikes, bike_stands: val, time: res.timestamp };
        })
      });
  }

}
