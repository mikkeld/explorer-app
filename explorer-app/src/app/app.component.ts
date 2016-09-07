import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import 'hammerjs'
import { AngularFire, AuthProviders } from 'angularfire2';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{

  user: any;

  constructor
  (
    private userService: UserService,
    private af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user.auth.providerData[0];
      } else {
        this.user = false;
      }
    });
  }

  ngOnInit(): void { }

  login(): void {
    this.userService.login().then(result => console.log(`User logged in`));
  }

  logout(): void {
    this.userService.logout();
  }
}
