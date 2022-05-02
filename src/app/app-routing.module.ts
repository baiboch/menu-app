import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainRoutingModule} from "./pages/main/main-routing.module";

@NgModule({
  imports: [MainRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
