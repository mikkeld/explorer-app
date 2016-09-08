import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mocks';
import { Observable }     from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders } from 'angularfire2';
import { Http, Response } from '@angular/http';

@Injectable()
export class CardService {

  constructor(
    private af: AngularFire,
    private http: Http
  ) { };

  getLocations(): Observable<any> {
    return this.af.database.list('/trips')
      .map(trips => {
        return trips
      })
  }

  getLikeForLocation(user: string, location: string): any {
    let like = this.af.database.object(`/likes/${user}/${location}`);
    return like;
  }

  random = [{name: "mikkel", age: 28}, {name:"mike", age: 25}];

  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }

  getCard(id: number): Promise<Card> {
    return this.getCards()
      .then(cards => cards.find(card => card.id === id));
  }

  getRandom(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      return resolve(this.random)
    })
  }
}
