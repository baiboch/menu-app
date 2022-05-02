import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {MainComponent} from './pages/main/main.component';
import {MainModule} from './pages/main/main.module';
import {counterReducer} from './pages/main/main.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
    MainModule,
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule { }
