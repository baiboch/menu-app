import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from './main-routing.module';
import {counterReducer} from './main.reducer';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule {}
