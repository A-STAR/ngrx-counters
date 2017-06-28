import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { counters } from './reducer';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counters })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
