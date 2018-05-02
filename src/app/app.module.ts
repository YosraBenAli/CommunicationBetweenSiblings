import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Sibling1Component} from './sibling1/sibling1.component';
import {FormsModule} from '@angular/forms';
import {Sibling2Component} from './sibling2/sibling2.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
