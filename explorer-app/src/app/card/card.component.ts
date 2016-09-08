import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';
import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders } from 'angularfire2';

// Easy filter (understand observables)
// Move data logic to service
// One step authentication
// Best testing

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  uid = 'roopk5ShJ5Wt9AyDv982XetFSrQ2';
  cards: Card[];
  locations: Card[] = [];

  constructor(
    private cardService: CardService,
    private router: Router,
    public af: AngularFire,
    private route: ActivatedRoute)
  {
    if(this.router.url == '/favorites') {
      console.log(this.locations)
    }
  }

  ngOnInit() {
    this.cardService.getLocations()
      .map(locations => {
        return locations.map(location => {
          this.cardService.getLikeForLocation(this.uid, location.$key).subscribe(like => {
            location.like = like.like;
            location.imgURL = location.like ? '../app/images/heart.png' : 'http://openweathermap.org/img/w/04d.png';
          });
          return location;
        })
      })
      .subscribe(result => this.locations = result);

  }

  gotoDetail(card: Card): void {
    this.router.navigate(['/card', card.id]);
  }

  like(location, value): void {
    let likesPath = this.af.database.object(`/likes/${this.uid}/${location.$key}`);
    likesPath.set({like: value});
  }

  formShowing: boolean;

}


// this.locations = af.database.list('/trips')
//   .map((locations) => {
//     return locations.map((location) => {
//       location.like = af.database.object(`/likes/${this.uid}/${location.$key}`);
//       return location;
//     })
//   });

// (location.liked)?.like | async
