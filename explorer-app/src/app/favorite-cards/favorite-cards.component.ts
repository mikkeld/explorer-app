import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable }        from 'rxjs/Observable';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-favorite-cards',
  templateUrl: 'favorite-cards.component.html',
  styleUrls: ['favorite-cards.component.css']
})
export class FavoriteCardsComponent implements OnInit {

  uid = 'roopk5ShJ5Wt9AyDv982XetFSrQ2';

  works: any[];

  constructor(
    public af: AngularFire,
    private cardService: CardService
  )
  {
    this.cardService.getRandom().then(result => {
      var filtered = result.filter(r => {
        return r.age > 26
      });
      console.log(filtered);
    })
  }

  ngOnInit() {
  }

}
