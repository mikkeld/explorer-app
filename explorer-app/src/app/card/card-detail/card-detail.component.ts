import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.component.html',
  styleUrls: ['card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input()
  card: Card;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cardService.getCard(id)
        .then(card => this.card = card);
    });
  }

}
