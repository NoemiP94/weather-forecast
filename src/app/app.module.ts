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
import { provideHttpClient } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { MetersToKilometersPipe } from './pipes/meters-to-kilometers.pipe';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MaindataComponent,
    HighlightComponent,
    NextforecastComponent,
    CapitalizeFirstPipe,
    MetersToKilometersPipe,
    RoundPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
