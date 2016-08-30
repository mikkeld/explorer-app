import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  getCards(): void {
    this.cardService.getCards().then(cards => this.cards = cards);
  }

  ngOnInit() {
    this.getCards();
  }

}
