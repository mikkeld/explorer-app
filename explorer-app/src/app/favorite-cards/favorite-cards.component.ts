import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-favorite-cards',
  templateUrl: 'favorite-cards.component.html',
  styleUrls: ['favorite-cards.component.css']
})
export class FavoriteCardsComponent implements OnInit {

  favoriteTours: Observable<any[]>;
  uid = 'roopk5ShJ5Wt9AyDv982XetFSrQ2';

  constructor(
    public af: AngularFire
  )
  {
    this.favoriteTours = af.database.list('/tours')
      .map(locations => {
        return locations.filter(location => {
          location.liked = af.database.object(`/likes/${this.uid}/${location.$key}`);
          return location.liked === true;
        })
      });
  }

  ngOnInit() {
  }

}
