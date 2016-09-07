import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';
import { Router } from '@angular/router'
import { Observable }        from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  uid = 'roopk5ShJ5Wt9AyDv982XetFSrQ2';
  cards: Card[];
  locations: Observable<any[]>;
  filteredLocations: Observable<any[]>;

  constructor(
    private cardService: CardService,
    private router: Router,
    public af: AngularFire)
  {
    this.locations = af.database.list('/trips')
      .map((locations) => {
        return locations.map((location) => {
          location.liked = af.database.object(`/likes/${this.uid}/${location.$key}`);
          return location;
        })
      });

    //window["foo"] = this.locations setting window
  }

  ngOnInit(): void {
  }

  gotoDetail(card: Card): void {
    this.router.navigate(['/card', card.id]);
  }

  like(location, value): void {
    let likesPath = this.af.database.object(`/likes/${this.uid}/${location.$key}`);
    likesPath.set({liked: value});
  }

  formShowing: boolean;

}
