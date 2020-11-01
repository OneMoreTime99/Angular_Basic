import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InterpolationDataEventBindingComponent } from './Day1-Interpolation-Data-EventBinding/interpolation-data-event-binding/interpolation-data-event-binding.component';
import { NgIfStructureDrectiveComponent } from './Day2-NgIf/ng-if-structure-drective/ng-if-structure-drective.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDataEventBindingComponent,
    NgIfStructureDrectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
