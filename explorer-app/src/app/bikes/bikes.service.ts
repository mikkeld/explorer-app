import { Injectable } from '@angular/core';
import { BikeStand } from './bike';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BikesService {

  constructor(private http: Http) { }

  getAllBikeStands(): Observable<BikeStand[]> {
    return this.http.get('https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=01763a585c8ab4e264684c27269cb9aec86a24bf')
      .map(bikestands => {
        return bikestands.json() || { };
      })
  }

  getBikeStandFromId(id: number): Observable<BikeStand> {
    return this.http.get(`https://api.jcdecaux.com/vls/v1/stations/${id}?contract=Dublin&apiKey=01763a585c8ab4e264684c27269cb9aec86a24bf`)
      .map(bikestand => {
        return bikestand.json() || {};
      })
  }

}
