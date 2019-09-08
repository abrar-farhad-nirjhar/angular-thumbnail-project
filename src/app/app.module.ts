import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

import { HttpClientModule } from '@angular/common/http';
import { JavascriptComponent } from './javascript/javascript.component';
import { HakunaComponent } from './hakuna/hakuna.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ThumbnailsComponent,
    JavascriptComponent,
    HakunaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
