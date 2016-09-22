import { Injectable } from '@angular/core';
import { BikeStand } from '../bike';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BikestandSearchService {

  constructor(private http: Http) { }

  getAll(term: string): Observable<BikeStand[]> {
    return this.http.get(`https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=01763a585c8ab4e264684c27269cb9aec86a24bf`)
      .map((b: Response) => {
        return b.json().filter(bikestand => {
          let address = bikestand.address.toLowerCase();
          return address.search(term.toLowerCase()) > -1;
        })
      })
  }

  search(stationNumber: number): Observable<BikeStand[]> {
    return this.http.get(`https://api.jcdecaux.com/vls/v1/stations/${stationNumber}?contract=Dublin&apiKey=01763a585c8ab4e264684c27269cb9aec86a24bf`)
      .map((b: Response) => {
        console.log(b.json() as BikeStand[])
        return [b.json()] as BikeStand[];
      });
  }

}
