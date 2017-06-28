import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increment, decrement, reset, add, remove, resetAll } from './reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counters$ = this.store.select('counters');

  constructor(private store: Store<any>) { }

  onIncrement(event) {
    this.store.dispatch(increment(event.id));
  }

  onDecrement(event) {
    this.store.dispatch(decrement(event.id));
  }

  onReset(event) {
    this.store.dispatch(reset(event.id));
  }

  onAdd() {
    this.store.dispatch(add());
  }

  onRemove() {
    this.store.dispatch(remove());
  }

  onResetAll() {
    this.store.dispatch(resetAll());
  }
}
