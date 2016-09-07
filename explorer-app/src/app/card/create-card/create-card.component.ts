import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CATEGORIES } from '../categories';

@Component({
  selector: 'app-create-card',
  templateUrl: 'create-card.component.html',
  styleUrls: ['create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  locations: FirebaseListObservable<any[]>;
  categories: string[];

  constructor(af: AngularFire) {
    this.locations = af.database.list('/trips')
  }

  ngOnInit() {
    this.categories = CATEGORIES;
  }

  card = new Card;
  selectedCategories: string[] = [];

  createLocation(val) {
    this.card.tags = this.selectedCategories;
    this.locations.push(this.card);
  }

  setCategories(category): void {
    let index = this.selectedCategories.indexOf(category);
    if(index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

}
