import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import 'hammerjs'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  auth: boolean;
  user: any;

  constructor(private userService: UserService) {  }

  login(): void {
    this.userService.login().then(result => this.auth = result);
    console.log(this.auth)
  }

  getCurrentUser(): any {
    this.userService.getCurrentUser().then(user => this.user = user);
    console.log(this.user)
  }


}
