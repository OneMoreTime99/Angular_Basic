import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isDanger = false;
  isWarning = false;
  classes : string = "box red-border yellow-background";
}
