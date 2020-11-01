import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-data-event-binding',
  templateUrl: './interpolation-data-event-binding.component.html',
  styleUrls: ['./interpolation-data-event-binding.component.css']
})
export class InterpolationDataEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
