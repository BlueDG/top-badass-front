import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HelloComponent } from './hello/hello.component';
import { HelloWithNameComponent } from './hello-with-name/hello-with-name.component';
import { ReviewComponent } from './review/review.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloWithNameComponent,
    ReviewComponent,
    CharacterComponent,
    CharacterListComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
