import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';
import { Router } from '@angular/router'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[];
  items: FirebaseListObservable<any[]>;

  constructor(
    private cardService: CardService,
    private router: Router,
    af: AngularFire)
  {
    this.items = af.database.list('/items');
  }

  getCards(): void {
    this.cardService.getCards().then(cards => this.cards = cards);
  }

  ngOnInit(): void {
    this.getCards();
  }

  gotoDetail(card: Card): void {
    this.router.navigate(['/card', card.id]);
  }

  formShowing: boolean;

}
