import { Component, OnInit, Input } from '@angular/core';
import { BikestandStatService } from './bikestand-stat.service';
import { BikeStand } from '../bike';

@Component({
  selector: 'app-bikestand-stat',
  templateUrl: 'bikestand-stat.component.html',
  styleUrls: ['bikestand-stat.component.css'],
  providers: [BikestandStatService]
})
export class BikestandStatComponent implements OnInit {

  constructor(private bikestandStatService: BikestandStatService) { }
  @Input()
  currentBikestand: BikeStand;

  bikestandStat: Object[];

  ngOnInit() {
    this.bikestandStatService.getBikestandStat(1)
      .subscribe(result => {
        console.log(result);
        // this.bikestandStatService = result;
      })
  }

}
