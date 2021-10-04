import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule, AppRoutingModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MoviesService], //add
})
export class AppModule {}
