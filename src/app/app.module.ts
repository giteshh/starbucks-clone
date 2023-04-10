import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import {BrowserModule} from "@angular/platform-browser";
import { NavbarComponent } from './pages/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
