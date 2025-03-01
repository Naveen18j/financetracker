import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import this
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule, // Add this here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
