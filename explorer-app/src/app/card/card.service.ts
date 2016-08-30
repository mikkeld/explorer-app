import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mocks';

@Injectable()
export class CardService {
  getCards(): Promise<Card[]> {
    return Promise.resolve(CARDS);
  }
}
