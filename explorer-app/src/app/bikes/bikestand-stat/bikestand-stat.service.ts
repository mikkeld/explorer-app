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
    return this.af.database.list(`/time/${id}`)
      .map(data => {
        return data.map(res => {
          return res.available_bikes;
        })
      });
      // .map(day => {
      //   day.map(minute => {
      //     return {minute: minute.timestamp, avaliableBikes: minute.available_bikes}
      //   })
      // })
  }

}
