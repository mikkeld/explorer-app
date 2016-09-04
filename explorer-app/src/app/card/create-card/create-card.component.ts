import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-create-card',
  templateUrl: 'create-card.component.html',
  styleUrls: ['create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  locations: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.locations = af.database.list('/trips')
  }

  ngOnInit() {
  }

  card = new Card;

  createLocation(val) {
    this.locations.push(this.card);
  }

}
