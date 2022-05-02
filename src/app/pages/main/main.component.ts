import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {increment, decrement, reset} from "./main.actions";

@Component({
  selector: 'app-root',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent {
  title = 'test-angular-app';
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
