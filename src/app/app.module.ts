import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReviewComponent } from './review/review.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { HomeComponent } from './home/home.component';
import { ScorePipe } from './pipes/score.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    CharacterComponent,
    CharacterListComponent,
    HomeComponent,
    ScorePipe
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
