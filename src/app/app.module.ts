import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import this
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, // Add this here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
