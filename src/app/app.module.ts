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
import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    CharacterComponent,
    CharacterListComponent,
    HomeComponent,
    ScorePipe,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
