import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySearchComponent } from './city-search/city-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
