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
          return {available_bikes: res.available_bikes, time: res.timestamp };
        })
      });
  }

}
