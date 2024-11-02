import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MaindataComponent } from './components/maindata/maindata.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { NextforecastComponent } from './components/nextforecast/nextforecast.component';
import { OtherComponent } from './components/other/other.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MaindataComponent,
    HighlightComponent,
    NextforecastComponent,
    OtherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
