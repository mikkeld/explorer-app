import { Component, OnInit, Input } from '@angular/core';
import { BikestandStatService } from './bikestand-stat.service';
import { BikeStand } from '../bike';
import { ActivatedRoute, Params } from '@angular/router';
import {BikesService} from "../bikes.service";

@Component({
  selector: 'app-bikestand-stat',
  templateUrl: 'bikestand-stat.component.html',
  styleUrls: ['bikestand-stat.component.css'],
  providers: [BikestandStatService, BikesService]
})
export class BikestandStatComponent implements OnInit {

  constructor(
    private bikestandStatService: BikestandStatService,
    private bikestandService: BikesService,
    private route: ActivatedRoute
  ) { }

  currentBikestand: BikeStand;
  bikestandStat: Object[];
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      let res;
      this.bikestandStatService.getBikestandStat(id)
        .subscribe(bikestand => {
          //Average available bikes per time interval
          res = this.avg(bikestand, (time) => {
            return new Date(time).getHours();
          });

          //Push % free bikes to chart data
          let temp = [];
          res.forEach(time => {
            this.lineChartLabels.push(time.time);
            temp.push(time.available_bikes / bikestand[0].bike_stands);
          });
          console.log(bikestand[0].bike_stands)
          this.lineChartData.push({data:temp});
        });

      this.bikestandService.getBikeStandFromId(id)
        .subscribe(bikestand => {
          this.currentBikestand = bikestand;
        })
    });

  }

  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display:false
        }
      }],
      yAxes: [{
        gridLines: {
          display:false
        }
      }]
    }
  };
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  //Average bikes per specified time interval
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
