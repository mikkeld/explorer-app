import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-michael-map',
  templateUrl: 'michael-map.component.html',
  styleUrls: ['michael-map.component.css']
})
export class MichaelMapComponent implements OnInit {
  map: any;

  constructor() { }

  ngOnInit() {
    console.log(google)
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });


  }

}
