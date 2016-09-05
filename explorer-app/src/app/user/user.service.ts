/**
 * Created by mikkeld on 9/5/16.
 */

import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Injectable()
export class UserService {

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(

    )
  }

  login(): Promise<boolean> {
    var res: Promise<boolean> = new Promise((resolve, reject) => {
      this.af.auth.login().then(result => {
        resolve(result);
      })
    });
    return res;
  }

  getCurrentUser(): Promise<any> {
    return Promise.resolve(this.af.auth);
  }

}
