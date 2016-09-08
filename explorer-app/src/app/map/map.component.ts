import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/card.service';
import { Card } from '../card/card';
import { Router } from '@angular/router'

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

  uid = 'roopk5ShJ5Wt9AyDv982XetFSrQ2';

  lat: number = 53.339921;
  lng: number = -6.236479;
  iconUrl: string = 'http://openweathermap.org/img/w/04d.png';

  locations: Card[] = [];

  constructor(
    private cardService: CardService,
    private router: Router
  ) { }

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

  goToDetail(): void {
    // this.router.navigate(['/card', card.id]);
  }

}
//
// this.cardService.getLocations()
//   .map(locations => {
//     return locations.filter(location => {
//       return location.name === 'Carrantouhil';
//     })
//   })
//   .subscribe(result => console.log(result));
