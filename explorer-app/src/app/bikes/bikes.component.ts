import { Component, OnInit } from '@angular/core';
import { BikesService } from './bikes.service';
import { Observable }     from 'rxjs/Observable';
import { BikeStand } from './bike';

@Component({
  selector: 'app-bikes',
  templateUrl: 'bikes.component.html',
  styleUrls: ['bikes.component.css'],
  providers: [BikesService]
})
export class BikesComponent implements OnInit {

  constructor(private bikesService: BikesService) { }

  bikeStands: BikeStand[];
  lat:number = 53.345764;
  lng:number = -6.261247;
  zoom:number = 14;

  ngOnInit() {
    this.bikesService.getAllBikeStands()
      .map(bikeStands => {
        return bikeStands.map(bikeStand => {
          bikeStand.imagePath = this.setColorForBikeStand(bikeStand.available_bikes);
          return bikeStand;
        })
      })
      .subscribe(bikeStands => {
        this.bikeStands = bikeStands;
      })
  }

  setColorForBikeStand(availableBikes): string {
    const imagesPath = '../app/images/';
    if(availableBikes === 0) {
      return `${imagesPath}red.png`;
    } else if (availableBikes < 8) {
      return `${imagesPath}yellow.png`;
    } else {
      return `${imagesPath}green.png`
    }
  }



}
