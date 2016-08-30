import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hero: Hero = {
    id: 1,
    name: "Test hero"
  }
}
