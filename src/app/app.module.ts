import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './pages/main/main.component';
import {MainModule} from "./pages/main/main.module";

@NgModule({
  imports: [
    BrowserModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule { }
