import { Component, OnInit, Input } from '@angular/core';
import { BikestandStatService } from './bikestand-stat.service';
import { BikeStand } from '../bike';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bikestand-stat',
  templateUrl: 'bikestand-stat.component.html',
  styleUrls: ['bikestand-stat.component.css'],
  providers: [BikestandStatService]
})
export class BikestandStatComponent implements OnInit {

  constructor(
    private bikestandStatService: BikestandStatService,
    private route: ActivatedRoute
  ) { }

  bikestandStat: Object[];

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.bikestandStatService.getBikestandStat(id)
        .subscribe(bikestand => this.bikestandStat = this.avg(bikestand, (time) => {
          return new Date(time).getMinutes();
        }));
    });
  }

  avg(arr, groupOf) {
    let obj = {};
    for(let pair of arr) {
      let groupName = groupOf(pair.time);
      if(groupName in obj) {
        obj[groupName].push(pair.available_bikes)
      } else {
        obj[groupName] = [pair.available_bikes]
      }
    }

    function average(array) {
      return array.reduce((sum, el) => {
          return sum + el
        },0) / array.length
    }

    let result = {};

    for(let v in obj) {
      result[v] = average(obj[v])
    }
    return Object.keys(result).map((value) => {
      return {time: value, available_bikes: result[value]};
    })
  }

}
