import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ToggleSelectModule} from "./share/component/toggle-select/toggle-select.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToggleSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
