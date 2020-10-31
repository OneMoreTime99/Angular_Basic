import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Interpolation and Data & Event Binding';
  user = {
    name: 'viet',
    age: 20
  };


  // DATA BIDING
  // EVENT BIDING
  handle(event): void {
    console.log('clicked', event);
  }
}
