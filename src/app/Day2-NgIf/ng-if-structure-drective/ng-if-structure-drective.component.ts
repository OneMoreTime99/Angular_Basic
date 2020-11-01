import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-structure-drective',
  templateUrl: './ng-if-structure-drective.component.html',
  styleUrls: ['./ng-if-structure-drective.component.css']
})
export class NgIfStructureDrectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user={
    name: 'viet',
    age : 20
  }

}
