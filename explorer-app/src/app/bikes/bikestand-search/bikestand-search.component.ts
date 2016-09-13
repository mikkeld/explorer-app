import { Component, OnInit } from '@angular/core';
import { BikestandSearchService } from './bikestand-search.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { BikeStand } from '../bike';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-bikestand-search',
  templateUrl: 'bikestand-search.component.html',
  styleUrls: ['bikestand-search.component.css'],
  providers: [BikestandSearchService]
})
export class BikestandSearchComponent implements OnInit {

  test = "Yo";
  bikestands: Observable<BikeStand[]>;
  private searchTerms = new Subject<number>();

  constructor(private bikestandSearchService: BikestandSearchService) {  }

  search(term: number): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.bikestands = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.bikestandSearchService.search(term) : Observable.of<BikeStand[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<BikeStand[]>([])
      });

    window["all"] = this.bikestandSearchService.getAll();
  }

}
