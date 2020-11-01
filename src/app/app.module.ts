import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InterpolationDataEventBindingComponent } from './Day1-Interpolation-Data-EventBinding/interpolation-data-event-binding/interpolation-data-event-binding.component';
import { NgIfStructureDrectiveComponent } from './Day2-NgIf/ng-if-structure-drective/ng-if-structure-drective.component';
import { NgForComponent } from './Day3-NgFor-Structure-Directive/ng-for/ng-for.component';
import { AttributeDirectiveComponent } from './Day4-Attribute-Directive/attribute-directive/attribute-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDataEventBindingComponent,
    NgIfStructureDrectiveComponent,
    NgForComponent,
    AttributeDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
