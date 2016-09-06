import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mocks';

@Injectable()
export class CardService {

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
